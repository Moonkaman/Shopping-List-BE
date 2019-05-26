const db = require('../dbConfig');

module.exports = {
  add,
  update,
  remove,
  getAll,
  getHouse
}

function add(house) {
  return db('house').insert(house);
}

function update(id, content) {
  return db('house').where({id}).update(content);
}

function remove(id) {
  return db('house').where({id}).del();
}

function getAll() {
  return db('house');
}

function getHouse(id) {
  return db('house').where({id: id}).first();
}

