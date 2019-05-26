const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, secret, (err, decoded) => {
      if(err) {
        return res.status(401).json({message: 'Modified token, please log in again'});
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({message: 'Please log in'});
  }
}