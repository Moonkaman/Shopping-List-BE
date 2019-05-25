const db = require('../dbConfig');

module.exports = {
  findBy,
  add
}

function findBy(filter) {
  return db('users').where(filter).first();
}

function add(user) {
  return db('users').insert(user);
}