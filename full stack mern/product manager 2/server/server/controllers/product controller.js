// server/controllers/product.controller.js
const Product = require('../models/Product');

module.exports = {
  findAllProducts: (req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.status(400).json(err));
  },

  findProductById: (req, res) => {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.status(400).json(err));
  },

  createProduct: (req, res) => {
    Product.create(req.body)
      .then(newProduct => res.json(newProduct))
      .catch(err => res.status(400).json(err));
  }
};
