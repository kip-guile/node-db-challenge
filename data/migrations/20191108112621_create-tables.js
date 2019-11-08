
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
        tbl.increments()
        tbl.string('name')
            .unique()
            .notNullable()
        tbl.text('description')
        tbl.boolean('completed', {precision: false})
            .notNullable()
    })
    .createTable('task', tbl => {
        tbl.increments()
        tbl.text('description')
            .unique()
            .notNullable()
        tbl.text('notes')
        tbl.boolean('completed', {precision: false})
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('resource', tbl => {
        tbl.increments()
        tbl.string('name')
            .notNullable()
            .unique()
        tbl.text('description')
    })
    .createTable('project_resource', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resource')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
};
