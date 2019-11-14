
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'install preprocessor', notes: 'this is important stuff', completed: 'false', project_id: '4'},
        {description: 'flex fingers', notes: 'you boutto do some next level typing', completed: 'true', project_id: '4'},
        {description: 'create api', notes: 'endpoints have to be eaten', completed: 'false', project_id: '2'},
        {description: 'store data', notes: 'why not store data', completed: 'true', project_id: '1'},
        {description: 'write code', notes: 'this is magic, nuff said', completed: 'false', project_id: '3'}
      ]);
    });
};