
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient_resource', table=>{
    table.increments('id').primary();
    table.integer('patient_id').references('patient.id').unsigned().onDelete('cascade');
    table.integer('resource_id').references('resource.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patient_resource')
};
