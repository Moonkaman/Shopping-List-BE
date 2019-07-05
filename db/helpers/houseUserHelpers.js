const db = require('../dbConfig');

module.exports = {
  getHouseUsers,
  addUserToHouse,
  removeUserFromHouse
}

function getHouseUsers(house_id) {
  return db.select('uh.id as id','u.id as user_id', 'u.username', 'h.id as house_id', 'h.house_name').from('user_houses as uh')
  .innerJoin('house as h', 'uh.house_id', 'h.id')
  .innerJoin('users as u', 'uh.user_id', 'u.id')
  .where({house_id})
}

function addUserToHouse(user) {
  return db('user_houses').insert(user);
}

function removeUserFromHouse(id) {
  return db('user_houses').where({id}).del();
}