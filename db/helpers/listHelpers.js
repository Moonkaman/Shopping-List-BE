const db = require('../dbConfig');

module.exports = {
  addList,
  removeList,
  updateList,
  getList,
  getLists
}

function addList(list) {
  return db('lists').insert(list);
}

function removeList(id) {
  return db('lists').where({id}).del();
}

function updateList(id, list) {
  return db('lists').where({id}).update(list);
}

function getList(id) {
  return db('lists').where({id}).first();
}

function getLists() {
  return db('lists');
}