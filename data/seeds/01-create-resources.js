
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Eloquent JS', description: 'Javascript that is eloquent as opposed to bot being, I guess'},
        {name: 'Eloquent Node', description: 'Here we go again'},
        {name: 'Intro to JS', description: 'JS for dummies'},
        {name: 'BAD HTML', description: 'The worstest html book'},
        {name: 'A database book', description: 'yea, very necessary'}
      ]);
    });
};