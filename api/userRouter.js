const router = require('express').Router();
const db = require('../db/helpers/userHelpers');
const restricted = require('./auth/restricted');

router.use(restricted);

router.get('/me', (req, res) => {
  db.getUserInfo(req.decoded.subject)
    .then(me => {
      db.getUserHouses(req.decoded.subject)
        .then(myHouses => res.status(200).json({...me, houses: myHouses}))
    })
    .catch(err => res.status(500).json({message: 'Could not retrieve user info at this time', err}));
})

module.exports = router;