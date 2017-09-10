
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE herbs RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('herbs').insert([
        {name: 'Bu'},
        {name: 'zhu'},
        {name: 'zhi'}
      ]);
    });
};
