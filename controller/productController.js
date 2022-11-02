const asyncHandler = require('express-async-handler')
// const Product = require('../models/productModel')
const products = require('../data')

module.exports.getProduct = asyncHandler(async (req, res) => {
    res.json(products)
})

module.exports.getProductById = asyncHandler(async(req, res) => {
    const product = await products.find((p) => p._id === req.params.id)
    if(product) {
        res.json(product)
    }else{
        res.status(404).json({ message: 'Product Not Found' })
    }
})