
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE herbs RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('herbs').insert([
        {name: 'Shu Di Huang'},
        {name: 'Huang Qi'},
        {name: 'Gui Zhi'}
      ]);
    });
};
