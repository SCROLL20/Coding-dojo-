
const ProductController = require('server/controllers/product.controller');


module.exports = app => {
    app.get('/api/products/', ProductController.findAllProducts);
    app.get("/api/products/:id/", ProductController.findOneProduct);
    app.post('/api/products/new/', ProductController.creatProduct);
    app.put("/api/products/update/:id", ProductController.updateExistingProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);

}