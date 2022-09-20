const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel');

module.exports.registerUser = asyncHandler(async(req,res) => {
    const { name, email, password } = req.body

    //If any of the parameters is missing

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please add a text field')
    }
   
    //Check if the user already exists
    // const userExists = await User.findOne({email})

    // if(userExists){
    //     res.status(400)
    //     throw new Error('User already exists')
    // }

    // //Hashing the password
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    // // storing the data inside the database
    // const user = await User.create({
    //     name,
    //     email,
    //     password: hashedPassword
    // })

    // //  If the user data is entered properly
    // if(user){
    //     res.status(201).json({
    //         _id: user.id,
    //         name: user.name,
    //         email: user.email
    //     })
    // }else {
    //     res.status(400)
    //     throw new Error('Invalid User data')
    // }

    res.json({ message: 'Register User' })
})

module.exports.loginUser = asyncHandler(async(req,res) => {
    res.status(200);
    res.json({ message: 'Login User' })
    // throw new Error('Please add a text field')
})