
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource', table=>{
    table.increments('id').primary();
    table.text('category');
    table.text('type');
    table.text('title');
    table.text('article');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resource')
};
