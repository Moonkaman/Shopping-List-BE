const router = require('express').Router();
const bycrypt = require('bcryptjs');
const genToken = require('../../config/tokenServices');

const db = require('../../db/helpers/authHelpers');

router.post('/register', (req, res) => {
  if(!req.body.username || !req.body.password) {
    res.status(403).json({err: 'Please send a valid password & username'});
  } else {
    req.body.password = bycrypt.hashSync(req.body.password, 12);
    db.add(req.body)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
})

router.post('/login', (req, res) => {
  if(!req.body.username || !req.body.password) {
    res.status(403).json({err: 'Please send a valid password & username'});
  } else {
    db.findBy({username: req.body.username})
      .then(user => {
        if(bycrypt.compareSync(req.body.password, user.password)) {
          const token = genToken(user);
          res.status(200).json({message: 'Successfully logged in', token})
        } else {
          res.status(401).json({err: 'Invalid credentials'});
        }
      })
  }
})

module.exports = router;