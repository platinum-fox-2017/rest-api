'use strict';

const {
	User
} = require('../models');

module.exports = {
	findUsers(req, res) {
		User.findAll()
		.then(users => {
			if (users.length > 0) res.status(200).json({
					message: "Users Found",
					users
				});

			else res.status(404).json({
					message: "User Not Found"
				});
		})
		.catch(err => res.status(400).json({
			message: err.message,
		}))
	},

	findUserById(req, res) {
		User.findById(req.params.id)
		.then(user => {
			if (user) res.status(200).json({
					message: "User Found",
					user
				});

			else res.status(404).json({
					message: "User Not Found"
				});
		})
		.catch(err => res.status(400).json({
			message: err.message,
		}))
	},

	createUser(req, res) {
		User.create({
			username: req.body.username,
			password: req.body.password,
			role: req.body.role
		})
		.then(user => res.status(201).json({
			message: "User has been created",
			user
		}))
		.catch(err => res.status(400).json({
			message: err.message,
		}))
	},

	deleteUser(req, res) {
		User.findById(req.params.id)
		.then(user => {
			user.destroy()
			.then(() => res.status(200).json({
				message: "User has been deleted",
				user
			}))
			.catch(err => res.status(400).json({
				message: err.message,
			}))
		})
		.catch(err => res.status(400).json({
			message: err.message,
		}))
	},

	updateUser(req, res) {
		User.findById(req.params.id)
		.then(user => {
			user.update({
				username: req.body.username,
				password: req.body.password,
				role: req.body.role
			})
			.then(() => res.status(200).json({
				message: "User has been updated",
				user
			}))
			.catch(err => res.status(400).json({
				message: err.message,
			}))
		})
		.catch(err => res.status(400).json({
			message: err.message,
		}))
	},
}