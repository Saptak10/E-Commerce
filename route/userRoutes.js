const express = require('express')
const router = express.Router();

const { registerUser, getRegisteredUser, loginUser, getLoggedInUser, profileUser } = require('../controller/userController')

const protect = require('../middleware/authMiddleware')

router.post('/register', registerUser)
    .get('/register', getRegisteredUser)
    
router.post('/login', loginUser)
    .get('/login', getLoggedInUser)

router.get('/profile', protect, profileUser)

module.exports = router;