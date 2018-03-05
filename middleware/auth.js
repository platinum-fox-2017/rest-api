const jwt = require('jsonwebtoken');

module.exports = {
  isAuth: (req,res,next) => {
    try {
      const token = req.headers.token;
      var decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    } catch(err) {
      res.status(401).json({
        message: 'Token is Invalid'
      });
    }
  },
  isAuthorizedAdmin: (req,res,next) => {
    if (req.user.role == 'admin' ) {
      next();
    } else {
      res.status(401).json({
        message: 'User Not Authorized'
      });
    }
  },
  isAuthorizedAdminorMember: (req,res,next) => {
    if (req.user.role == 'admin' || req.params.id == req.user.id) {
      next();
    } else {
      res.status(401).json({
        message: 'User Not Authorized'
      });
    }
  }
};
