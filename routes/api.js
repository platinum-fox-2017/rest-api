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

const {
    authAdmin,
    authAdminAndUser
} = require('../controllers/auth.controller')

router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/users', authAdmin, getAllUsers)
router.get('/users/:id', authAdminAndUser, getAUser)
router.post('/users', authAdmin, createUser)
router.delete('/users/:id', authAdmin, deleteUser)
router.put('/users/:id', authAdminAndUser, updateUser)



module.exports = router