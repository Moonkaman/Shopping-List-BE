const db = require('../dbConfig');

module.exports = {
  addItem,
  getItems,
  getItem,
  updateItem,
  removeItem
}

function addItem(item) {
  return db('items').insert(item);
}

function getItems() {
  return db('items');
}

function getItem(id) {
  return db('items').where({id}).first();
}

function updateItem(id, item) {
  return db('items').where({id}).update(item);
}

function removeItem(id) {
  return db('items').where({id}).del();
}