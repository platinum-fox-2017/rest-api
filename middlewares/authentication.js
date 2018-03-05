'use strict';
var jwt = require('jsonwebtoken');

module.exports = {
	authentication(req, res, next) {
		try {
            let decoded = jwt.verify(req.headers.token, process.env.SECRET);
            next();
        } catch(err) {
            res.status(401).json({
                message: "User Unauthorized"
            })
        }
    },
}