
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient_resource RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('patient_resource').insert([
        {patient_id: 1, resource_id: 1},
        {patient_id: 1, resource_id: 2},
        {patient_id: 2, resource_id: 3},
        {patient_id: 3, resource_id: 1}
      ]);
    });
};
