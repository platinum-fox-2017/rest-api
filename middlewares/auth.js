'use strict';
var jwt = require('jsonwebtoken');

module.exports = {
	admin(req, res, next) {
		try {
            let decoded = jwt.verify(req.headers.token, process.env.SECRET);
            if (decoded.role === 'admin') next();
            else res.status(401).json({
                message: "User Unauthorized"
            })
        } catch(err) {
            res.status(401).json({
                message: "User Unauthorized"
            })
        }
    },

    auth(req, res, next) {
        try {
            let decoded = jwt.verify(req.headers.token, process.env.SECRET);
            if (decoded.role === 'admin') next();
            else if (decoded.id === Number(req.params.id)) next();
            else res.status(401).json({
                message: "User Unauthorized"
            })
        } catch(err) {
            res.status(401).json({
                message: "User Unauthorized"
            })
        }
    },
}