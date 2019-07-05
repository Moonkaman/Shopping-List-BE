const db = require('../dbConfig');

module.exports = {
  getUserInfo,
  getUserHouses
}

function getUserInfo(id) {
  return db.select('id', 'username').from('users').where({id}).first();
}

function getUserHouses(id) {
  return db('h.id', 'h.house_name').from('house as h')
  .innerJoin('user_houses as uh', 'h.id', 'uh.house_id').where({'uh.user_id': id});
}