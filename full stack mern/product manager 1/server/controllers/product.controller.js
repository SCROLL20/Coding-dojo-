const { Message } = require("discord.js");
const Product = require("../models/product.model")

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.status(201).json({ 
                success: true,
                Message: "Product created successfully",
                Product: newlyCreatedProduct
            })
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Failed to create product",
                error: err
            })
        });}