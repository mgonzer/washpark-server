
exports.up = function(knex, Promise) {
  return knex.schema.createTable('note', table=>{
    table.increments('id').primary();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('body');
    table.integer('patient_id').references('patient.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('note')
};
