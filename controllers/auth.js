var jwt = require('jsonwebtoken');


module.exports = {
  auth: (req, res, next) => {
    let token =  req.headers.token
    if (token) {
      try {
        var decoded = jwt.verify(token, process.env.SECRET);
        if (decoded) {
          if (decoded.role.toLowerCase() === 'admin' || (decoded.id === +req.params.id && decoded.role.toLowerCase() === 'user')) {
            next()
          }
          else {
            res.status(404).json({
              message: 'not authorized'
            })
          }
        }
        else {
          res.status(401).json({
            message: 'who are you?'
          })
        }
      } catch (e) {
        res.status(401).json({
          message: 'not authorized'
        })
      }
    }else {
      res.status(401).json({
        message: 'not authorized'
      })
    }

  }
}
