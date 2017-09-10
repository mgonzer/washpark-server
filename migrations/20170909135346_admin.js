
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', table => {
    table.text('id').primary();
    table.text('username');
    table.text('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin')
};
