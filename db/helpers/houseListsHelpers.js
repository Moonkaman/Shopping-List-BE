const db = require('../dbConfig');

module.exports = {
  addListToHouse,
  getHouseLists,
  removeListFromHouse
}

function addListToHouse(listRelationship) {
  return db('house_lists').insert(listRelationship)
}

function getHouseLists(house_id) {
  return db.select('hl.id as id','h.id as house_id', 'h.house_name', 'l.id as list_id', 'l.list_name', 'l.completed', 'l.total_price').from('house_lists as hl')
  .innerJoin('house as h', 'hl.house_id', 'h.id')
  .innerJoin('lists as l', 'hl.list_id', 'l.id')
  .where({house_id})
}

function removeListFromHouse(id) {
  return db('house_lists').where({id}).del();
}