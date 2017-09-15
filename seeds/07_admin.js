require('dotenv').config();
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);


exports.seed = function(knex, Promise) {
  return knex('admin').del()
    .then(function () {
      return knex('admin').insert([
        {id: "admin", username: 'admin', password: bcrypt.hashSync(process.env.PASSWORD, salt)}
      ]);
    });
};
