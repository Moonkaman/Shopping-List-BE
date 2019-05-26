const router = require('express').Router();
const db = require('../db/helpers/houseListsHelpers');

router.get('/:id', (req, res) => {
  db.getHouseLists(req.params.id)
    .then(lists => res.status(200).json(lists))
    .catch(err => res.status(500).json({message: 'Could not retrieve house lists at this time', err}))
});

router.post('/', (req, res) => {
  if(!req.body.house_id || !req.body.list_id) {
    res.status(400).json({message: 'Please provide a house_id and a list_id'});
  } else {
    db.addListToHouse(req.body)
      .then(id => res.status(201).json({message: 'Successfully added list to house', id}))
      .catch(err => res.status(500).json({message: 'Could add list to house at this time', err}));
  }
});

router.delete('/:id', (req, res) => {
  db.removeListFromHouse(req.params.id)
    .then(count => {
      if(count <= 0) {
        res.status(404).json({message: 'The list you tried to remove was not found'});
      } else {
        res.status(204).end();
      }
    })
});

module.exports = router;