
const jwt = require('jsonwebtoken');

class Auth {

  static authentication(req, res, next){
    // check if token exist
    try {
      let tokenDecoded = jwt.verify(req.headers.token, 'SECRETKEY001')
      console.log(tokenDecoded);
      req.headers.role = tokenDecoded.role;
      req.headers.id   = tokenDecoded.id;
      console.log(req.headers);
      next()
    } catch (e) {
      res.status(401).json({
        message: 'Token is invalid'
      })
    }

  }

  static authorization(req, res, next){
    // check role or id
    if (req.headers.role === 'admin') {
      next()
    } else if (req.headers.role ==='user') {
      if (Number(req.params.id) !== req.headers.id) {
        res.status(401).json({
          message: 'You are not allowed to view this page.'
        })
      } else {
        next()
      }
    }
  }

  static adminOnly(req,res,next){
    if (req.headers.role === 'admin') {
      next()
    } else {
      res.status(401).json({
        message: 'You are not allowed to view this page.'
      })
    }
  }

}

module.exports = {
  Auth : Auth
};
