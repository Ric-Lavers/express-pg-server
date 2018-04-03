
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog-posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog-posts').insert([
        {id: 1, title: 'hey', body:'blah blah blah',date: new Date},
        {id: 2, title: 'hello', body:'nah nah nah',date: new Date},
        {id: 3, title: 'hi', body:'la la la',date: new Date}
      ]);
    });
};
