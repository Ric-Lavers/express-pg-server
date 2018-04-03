
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog-posts', (table) => {
    table.increments()
    table.text('title')
    table.text('body')
    table.date('date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog-post')
};
