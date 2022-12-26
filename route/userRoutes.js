const express = require('express')
const router = express.Router();

const { registerUser, getRegisteredUser, loginUser, profileUser, updateProfileUser } = require('../controller/userController')

const protect = require('../middleware/authMiddleware')

router.route('/register')
    .post(registerUser)
    .get(protect, getRegisteredUser)
    // .get(getRegisteredUser)
    
router.post('/login', loginUser)

router.route('/profile')
    .get(profileUser)
    .put(updateProfileUser)

module.exports = router;