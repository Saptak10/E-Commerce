const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')

module.exports.registerUser = asyncHandler(async(req,res) => {
    res.status(200);
    // throw new Error('Please add a text field')
})

module.exports.loginUser = asyncHandler(async(req,res) => {
    res.status(200);
    // throw new Error('Please add a text field')
})