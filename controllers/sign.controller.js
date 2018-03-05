'use strict';

var jwt = require('jsonwebtoken');
const {
	User
} = require('../models');

module.exports = {
	up(req, res) {
		User.create({
			username: req.body.username,
			password: req.body.password
		})
		.then(user => res.status(201).json({
			message: "User has been created",
			user
		}))
		.catch(err => res.status(400).json({
			message: err.message,
		}))
	},

	in(req, res) {
		User.login(req.body.username, req.body.password)
		.then(user => {
			if (user) {
				let token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET);
				res.status(200).json({
					message: "Login Success",
					token
				})
			} else res.status(401).json({
				message: "username / password doesn't match"
			})
		})
		.catch(err => res.status(400).json({
			message: err.message,
		}))
	},
}