const router = require('express').Router()
const {
    signUp,
    signIn,
    getAllUsers,
    getAUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/api.controller.js')

router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/users', getAllUsers)
router.get('/users/:id', getAUser)
router.post('users', createUser)
router.delete('/users/:id', deleteUser)
router.put('users/:id', updateUser)



module.exports = router