const router = require('express').Router();
const db = require('../db/helpers/itemHelpers');

router.get('/', (req, res) => {
  db.getItems()
    .then(items => res.status(200).json(items))
    .catch(err => res.status(500).json({message: 'Could not retrieve items at this time', err}))
});

router.get('/:id', (req, res) => {
  db.getItem(req.params.id)
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).json({message: 'Could not retrieve item at this time', err}));
});

router.post('/', (req, res) => {
  if(!req.body.item) {
    res.status(400).json({message: 'Please provide an Item'});
  } else {
    db.addItem(req.body)
      .then(id => res.status(201).json({message: 'Successfully created item', id: id[0]}))
      .catch(err => res.status(500).json({message: 'Could not create item at this time', err}));
  }
});

router.put('/:id', (req, res) => {
  if(!req.body.item) {
    res.status(400).json({message: 'Please provide an Item'});
  } else {
    db.updateItem(req.params.id, req.body)
      .then(count => {
        if(count <= 0) {
          res.status(404).json({message: 'The item you tried to update was not found'});
        } else {
          res.status(200).json({message: 'Item successfully updated'})
        }
      })
      .catch(err => res.status(500).json({message: 'Could not update item at this time', err}));
  }
});

router.delete('/:id', (req, res) => {
  db.removeItem(req.params.id)
    .then(count => {
      if(count <= 0) {
        res.status(404).json({message: 'The item you tried to delete was not found'});
      } else {
        res.status(204).end();
      }
    })
    .catch(err => res.status(500).json({message: 'Could not delete item at this time', err}));
})

module.exports = router;