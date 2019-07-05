const router = require('express').Router();
const db = require('../db/helpers/listHelpers');

router.get('/', (req, res) => {
  db.getLists()
    .then(lists => res.status(200).json(lists))
    .catch(err => res.status(500).json({message: 'Could not retrieve lists at this time', err}));
});

router.post('/', (req, res) => {
  if(!req.body.list_name) {
    res.status(400).json({message: "Please provide a list_name"})
  } else {
    db.addList(req.body)
      .then(id => res.status(201).json({message: 'Successfully created new list', id: id[0]}))
      .catch(err => res.status(500).json({message: 'Could not create list at this time', err}));
  }
});

router.delete('/:id', (req, res) => {
  db.removeList(req.params.id)
    .then(count => {
      if(count <= 0) {
        res.status(404).json({message: 'The list you tried to delete was not found'});
      } else {
        res.status(204).end();
      }
    })
    .catch(err => res.status(500).json({message: 'Could not delete list at this time', err}));
});

router.put('/:id', (req, res) => {
  if(!req.body.list_name) {
    res.status(400).json({message: "Please provide a list_name"})
  } else {
    db.updateList(req.params.id, req.body)
      .then(count => res.status(200).json({message: 'List successfully updated', count}))
      .catch(err => res.status(500).json({message: 'Could not update list at this time', err}));
  }
})

module.exports = router;