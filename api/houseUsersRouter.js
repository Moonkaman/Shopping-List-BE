const router = require('express').Router();
const db = require('../db/helpers/houseUserHelpers');

router.get('/:id', (req, res) => {
  db.getHouseUsers(req.params.id)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({message: 'Could not retrieve house info at this time', err}))
});

router.post('/', (req, res) => {
  if(!req.body.user_id || !req.body.house_id) {
    res.status(400).json({message: 'Please provide a user_id and house_id'});
  } else {
    db.addUserToHouse(req.body)
      .then(id => res.status(201).json({message: 'Successfully added user to house', id: id[0]}))
      .catch(err => res.status(500).json({message: 'Could not add user to house at this time', err}))
  }
});

router.delete('/:id', (req, res) => {
  db.removeUserFromHouse(id)
    .then(count => {
      if(count <= 0) {
        res.status(404).json({message: 'The user you tried to remove was not found'})
      } else {
        res.status(204).end();
      }
    })
    .catch(err => res.status(500).json({message: 'Could not remove user from house at this time', err}))
});

module.exports = router;