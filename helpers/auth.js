const jwt = require('jsonwebtoken')


function auth(req, res, next){
    let token =  req.headers.token
    if (token) {
      try {
        var decoded = jwt.verify(token,'secretkey');
        console.log(decoded);
        if (decoded) {
          if (decoded.user.role === 'admin') {
            next()
          } else if(decoded.user.id === Number(req.params.id)){
            next()
          } else {
            res.status(404).json({
              message: 'sorry  cant access this feature from your privacy '
            })
          }
        }
        else {
          res.status(401).json({
            message: 'who are you?'
          })
        }
      } catch (error) {
        res.status(401).json({
          message: 'not authorized'
        })
      }
    } else {
      res.status(401).json({
        message: 'login first please'
      })
    }
}

module.exports = {auth};
