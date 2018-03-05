const jwt = require('jsonwebtoken')

module.exports = {
  auth: (req, res, next) => {
    let token = req.headers.token
    try {
      let decoded = jwt.verify(token, process.env.SECRET)
      // console.log(decoded)
      if(decoded.role == 'admin') {
        next()
      } else { 
        res.status(401).json({
          message: 'not authorized'
        })
      }
    } catch(err) {
      res.status(401).json({
        message: 'invalid token'
      })
    }
  },
  authUser: (req, res, next) => {
    let token = req.headers.token
    try {
      let decoded = jwt.verify(token, process.env.SECRET)
      // console.log(decoded)
      if(decoded.role == 'admin') {
        next()
      } else if(decoded.role == 'user') {
        if(decoded.id == req.params.id) {
          next()
        } else {
          res.status(401).json({
            message: 'not authorized'
          })
        }
      }
    } catch(err) {
      res.status(401).json({
        message: 'invalid token'
      })
    }
  }
}