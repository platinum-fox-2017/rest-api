const jwt = require('jsonwebtoken')

module.exports = {
  auth  : (req, res, next) => {
    let token = req.headers.token
    if( token ) {
      try {
        const decoded = jwt.verify(token, process.env.SECRET );
        if( decoded ) {
          if (decoded.role === 'admin' || (decode.role === 'user' && decoded.id === req.params.id)) {
            next()
          } else {
            res.status(401).json({
              message : "tempatmu bukan disini 😈"
            })
          }
        } else {
          res.status(401).json({
            message : "tempatmu bukan disini 😈"
          })
        }
      } catch (e) {
        res.status(401).json({
          message : "tempatmu bukan disini 😈"
        })
      }
    } else {
      res.status(401).json({
        message : "tempatmu bukan disini 😈"
      })
    }
  }
}
