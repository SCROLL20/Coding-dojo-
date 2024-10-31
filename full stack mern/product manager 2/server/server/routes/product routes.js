// server/routes/product.routes.js
const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
  app.get('/api/products', ProductController.findAllProducts);
  app.get('/api/products/:id', ProductController.findProductById);
  app.post('/api/products', ProductController.createProduct);
};
