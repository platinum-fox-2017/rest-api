const jwt = require('jsonwebtoken')

module.exports = {
  token: (req, res, next) => {
    if (req.headers.token) {
      jwt.verify(req.headers.token, process.env.TOKEN_SECRET, function(err, decoded) {
        if (!err) {
          req.decoded = decoded
          next()
        } else {
          res.status(400).json({ message: err })
        }
      })
    } else {
      res.status(202).json({ message : 'You must login !!' })
    }
  },
  roleAdmin: (req, res, next) => {
    if (req.headers.token) {
      jwt.verify(req.headers.token, process.env.TOKEN_SECRET, function(err, decoded) {
        if (!err) {
          if (decoded.role == 'admin' || decoded.role == 'user') {
            req.decoded = decoded
            next()
          } else {
            res.status(202).json({ message : 'You dont have authorize as Admin !!' })
          }
        } else {
          res.status(400).json({ message: err })
        }
      })
    } else {
      res.status(202).json({ message : 'You must login as Admin !!' })
    }
  },
  roleUser: (req, res, next) => {
    if (req.headers.token) {
      jwt.verify(req.headers.token, process.env.TOKEN_SECRET, function(err, decoded) {
        if (!err) {
          if (decoded.role == 'user') {
            req.decoded = decoded
            next()
          } else {
            res.status(202).json({ message : 'You dont have authorize as User !!' })
          }
        } else {
          res.status(400).json({ message: err })
        }
      })
    } else {
      res.status(202).json({ message : 'You must login as User !!' })
    }
  }
}
