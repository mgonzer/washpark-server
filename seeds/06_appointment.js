
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE appointment RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('appointment').insert([
        {package: 5, patient_id: 1},
        {package: 4, patient_id: 2},
        {package: 1, patient_id: 3}
      ]);
    });
};
