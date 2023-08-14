const express = require('express')
const router = express.Router()
const cUser = require('../controllers/cUser')
const verifyToken = require('../middlewares/verifyToken')

router.get('/admin', verifyToken.verifyToken ,cUser.getAdmin)
router.get('/login', cUser.login)
router.get('/register', cUser.register)
module.exports = router