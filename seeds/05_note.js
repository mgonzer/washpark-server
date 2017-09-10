
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE note RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('note').insert([
        {body: 'Eat more veggies', patient_id: 1},
        {body: 'Drink more water', patient_id: 1},
        {body: 'Smoke less pot', patient_id: 2}
      ]);
    });
};
