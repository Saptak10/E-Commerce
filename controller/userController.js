const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')

module.exports.registerUser = asyncHandler(async(req,res) => {
    res.status(200);
})

module.exports.loginUser = asyncHandler(async(req,res) => {
    res.status(200);
})