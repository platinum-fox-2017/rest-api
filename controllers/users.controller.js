'use strict';
module.exports = {
	signup(req, res) {
		res.status(200).json({
			message: "signup"
		})
	},

	signin(req, res) {
		res.status(200).json({
			message: "signin"
		})
	},

	findUsers(req, res) {
		res.status(200).json({
			message: "findUsers"
		})
	},

	findUserById(req, res) {
		res.status(200).json({
			message: "findUserById"
		})
	},

	createUser(req, res) {
		res.status(200).json({
			message: "createUser"
		})
	},

	deleteUser(req, res) {
		res.status(200).json({
			message: "deleteUser"
		})
	},

	updateUser(req, res) {
		res.status(200).json({
			message: "updateUser"
		})
	},
}