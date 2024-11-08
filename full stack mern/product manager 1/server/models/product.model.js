const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
      title:{
        type: String,
        required:[true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters long"]
      },
      price:{
        type: Number,
        min: 0,
        max: 1000000
      },
      description:{
        type: String,
        required:[true, "{PATH} is required"],
        maxLength:[10, "{PATH} must be at least 10 characters"]
      }

}, {timestamps: true})

const Product =mongoose.model('Product', ProductSchema)
module.exports= Product;