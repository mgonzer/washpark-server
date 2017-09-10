
exports.up = function(knex, Promise) {
  return knex.schema.createTable('herbs', table => {
    table.increments('id').primary();
    table.text('name');
    table.integer('quantity').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('herbs')
};
