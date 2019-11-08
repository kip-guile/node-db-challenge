
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Databases', description: 'Store data', completed: 'false'},
        {name: 'Node', description: 'Create backend', completed: 'false'},
        {name: 'Javascript', description: 'Do fancy web stuff', completed: 'true'},
        {name: 'UI/UX', description: 'Make web loof fancy', completed: 'false'}
      ]);
    });
};
