
exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointment', table=>{
    table.increments('id').primary();
    table.integer('package');
    table.integer('patient_id').references('patient.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appointment');
};
