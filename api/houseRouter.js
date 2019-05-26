const router = require('express').Router();
const db = require('../db/helpers/houseHelpers');

router.get('/', (req, res) => {
  db.getHouses()
    .then(houses => res.status(200).json(houses))
    .catch(err => res.status(500).json({message: 'Could not retrieve houses at this time', err}))
});

router.post('/', (req, res) => {
  if(!req.body.house_name) {
    res.status(400).json({message: 'Make sure you provide house_name'});
  } else {
    db.addHouse(req.body)
      .then(id => res.status(201).json({message: 'House successfully created.', id}))
      .catch(err => res.status(500).json({message: 'Could not create a new house at this time', err}))
  }
});

router.delete('/:id', (req, res) => {
  db.removeHouse(req.params.id)
    .then(count => {
      if(count <= 0) {
        res.status(404).json({message: 'The house you tried to delete was not found'});
      } else {
        res.status(204).end();
      }
    })
});

router.put('/:id', (req, res) => {
  if(!req.body.house_name) {
    res.status(400).json({message: 'Make sure you provide house_name'});
  } else {
    db.updateHouse(req.params.id, req.body)
      .then(count => res.status(200).json({message: 'Successfully updated', count}))
      .catch(err => res.status(500).json({message: 'Could not update house at this time', err}))
  }
})

module.exports = router;