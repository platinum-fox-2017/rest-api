'use strict'
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    authentucation: (req, res, next) => {
        const token = req.headers.token
        const decoded = jwt.verify(token, process.env.SECRET);
        if(decoded.role == 'admin') {
            next();
        } else {
            next('who are you');
        }
    }
}