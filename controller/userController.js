const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel');

module.exports.registerUser = asyncHandler(async(req,res) => {
    const { name, email, password } = req.body

    console.log('Hello world')
    //If any of the parameters is missing
    
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please add a text field')
    }
    
    // Check if the user already exists

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // storing the data inside the database
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    //  If the user data is entered properly
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid User data')
    }

    // res.json({ message: 'Register User' })
})

module.exports.getRegisteredUser = asyncHandler(async(req,res) => {
    const users = await User.find()
    res.json(users)
})

module.exports.loginUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body

    console.log('Hello world')

    //Check and find if the user email exists
    const user = await User.findOne({email})

    //Check if the user exist and checks if the password is same that the user entered
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }

    // res.status(200);
    // res.json({ message: 'Login User' })
})

module.exports.profileUser = asyncHandler(async(req,res) => {
    // // res.status(200).json(req.user)
    const user = await User.findById(req.user._conditions._id)
    // console.log(req.user._conditions._id)

    if (user) {
        res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
    // res.status(200).json({ message: 'Profile User' })
})

module.exports.updateProfileUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._conditions._id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        //Hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        user.password = hashedPassword
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}