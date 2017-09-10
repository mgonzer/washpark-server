
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE resource RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('resource').insert([
        {category: 'yin', type: 'dietary', title: "ready for FALL!", article: 'Time to start preparing for fall. First step is to keep warm.'},
        {category: 'yang', type: 'dietary', title: "ready for FALL!", article: 'Time to start preparing for fall. First step is to keep warm.'},
        {category: 'qi', type: 'dietary', title: "ready for FALL!", article: 'Time to start preparing for fall. First step is to keep warm.'},
        {category: 'blood', type: 'dietary', title: "ready for FALL!", article: 'Time to start preparing for fall. First step is to keep warm.'}
      ]);
    });
};
