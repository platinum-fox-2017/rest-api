const jwt = require('jsonwebtoken')

module.exports = {
  session: (req, res, next) => {
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
          if (decoded.role == 'admin') {
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

  roleReseller: (req, res, next) => {
    if (req.headers.token) {
      jwt.verify(req.headers.token, process.env.TOKEN_SECRET, function(err, decoded) {
        if (!err) {
          if (decoded.role == 'reseller') {
            req.decoded = decoded
            next()
          } else {
            res.status(202).json({ message : 'You dont have authorize as Reseller !!' })
          }
        } else {
          res.status(400).json({ message: err })
        }
      })
    } else {
      res.status(202).json({ message : 'You must login as Reseller !!' })
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
