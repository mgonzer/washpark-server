const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('patient').insert([
        {first_name: 'Sara', username: "sarajean", password: bcrypt.hashSync('sara123', salt), diagnosis: "Kidney Yin Deficiency", treatment_plan: "Nourish the Kidney yin. Acupuncture 1x/week, herbal formula: Liu Wei Di Huang Wan." },
        {first_name: 'Jill', username: "jillpill", password: bcrypt.hashSync('jill123', salt), diagnosis: "Blood Xu", treatment_plan:"Nourish Blood. Start eating more meat. Herbal Formula: Si Jun Zi Tang"},
        {first_name: 'Becky', username: "beckyjean", password: bcrypt.hashSync('becky123', salt), diagnosis: "Yin Xu"}
      ]);
    });
};
