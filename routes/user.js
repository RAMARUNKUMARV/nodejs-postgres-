
const router = require('express').Router()//import express

const user = require('../controllers/user')

router.post('/user', user.CreateUser)
router.get('/user/:id', user.GetUserById)
router.get('/user', user.GetAllUser)
router.delete('/user/:id', user.DeleteUser)
router.patch('/user/:id', user.UpdateUser)

module.exports = router