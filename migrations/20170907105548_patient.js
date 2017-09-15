
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient', table => {
    table.increments('id').primary();
    table.text('first_name');
    table.text('username')
    table.text('password');
    table.string('diagnosis');
    table.string('treatment_plan')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patient');
};
