const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('patient').insert([
        {first_name: 'Sara', username: "sarajean", password: bcrypt.hashSync('sara123', salt), diagnosis: "Qi Xu" },
        {first_name: 'Jill', username: "jillpill", password: bcrypt.hashSync('jill123', salt), diagnosis: "Blood Xu"},
        {first_name: 'Becky', username: "beckyjean", password: bcrypt.hashSync('becky123', salt), diagnosis: "Yin Xu"}
      ]);
    });
};
