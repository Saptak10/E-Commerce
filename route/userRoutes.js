const express = require('express')
const router = express.Router();

const { registerUser, loginUser, profileUser } = require('../controller/userController')

const protect = require('../middleware/authMiddleware')

router.post('/register', registerUser)
    
router.post('/login', loginUser)

router.get('/profile', protect, profileUser)

module.exports = router;