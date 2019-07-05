const db = require('../dbConfig');

module.exports = {
  addHouse,
  updateHouse,
  removeHouse,
  getHouses,
  getHouse
}

function addHouse(house) {
  return db('house').insert(house);
}

function updateHouse(id, content) {
  return db('house').where({id}).update(content);
}

function removeHouse(id) {
  return db('house').where({id}).del();
}

function getHouses() {
  return db('house');
}

function getHouse(id) {
  return db('house').where({id: id}).first();
}

