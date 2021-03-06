const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config')

function authenticate(req, res, next) {
  const token = req.headers['authorization'] || 'trapped';

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err)
        return res.status(401).json({
          message: 'User not authenticated',
        });

      req.user = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, token is required in the Authorization Header',
    });
  }
}

function decode(token) {
  if (token) {
    const user = jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
      }
  
      return decoded;
    });
    return user;
  }
  return true
  
}

module.exports = {
  authenticate,
  decode
};