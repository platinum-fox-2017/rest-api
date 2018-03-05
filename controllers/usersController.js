const sequelize = require('sequelize')
const Model = require('../models')
var bcrypt = require('bcryptjs');

module.exports = {
	signUp: (req, res) => {
		let newUser = {
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password)
		}

		Model.User.create(newUser)
		.then( data => {
			res.status(200).json ({
				message: 'Sign Up success',
				users: data
			})
		})
		.catch( err => {
			console.log(err);
		})
	},
	signIn: (req, res) => {
		Model.User.findOne({where: {username: req.body.username}})
		.then( data => {
			if(data){
				if(bcrypt.compareSync(req.body.password, data.password)) {
					res.status(200).json ({
						message: 'Sign in success',
						users: data
					})
				}	else {
					res.status(403).json ({
						message: 'Your password is not correct',
					})
				}
			}	else {
				res.status(403).json ({
					message: 'Username is not registered',
				})
			}
		})
		.catch( err => {
			console.log(err);
		})
	},
	getUsers: (req, res) => {
		Model.User.findAll()
		.then( data => {
			res.status(200).json ({
				message: 'User query success',
				users: data
			})
		})
		.catch( err => {
			console.log(err);
		})
	},
	createUser: (req, res) => {
		let newUser = {
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password)
		}

		Model.User.create(newUser)
		.then( data => {
			res.status(200).json ({
				message: 'Create new user success',
				users: data
			})
		})
		.catch( err => {
			console.log(err);
		})
	},
	getUserById: (req, res) => {
		let id = req.params.id

		Model.User.findById(id)
			.then( data => {
				if(data) {
					res.status(200).json ({
						message: 'Get user by id success',
						users: data
					})
				}	else {
					res.status(404).json ({
						message: 'User not found',
					})
				}
			})
			.catch( err => {
				console.log(err);
			})
	},
	updateUser: (req, res) => {
		let objUser = {
			username: req.body.username,
			password: req.body.password
		}

			Model.User.update(objUser, {where : { id : req.params.id }})
				.then( data => {
					res.status(200).json ({
						message: 'Update user success',
						users: data
					})
				})
				.catch( err => {
					console.log(err);
				})
	},
	removeUser: (req, res) => {
		Model.User.destroy( {where : { id : req.params.id } })
			.then( data => {
				res.status(200).json ({
					message: 'Delete user success',
					users: data
				})
			})
			.catch( err => {
				console.log(err);
			})
	}
}