const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductInCategory,
} = require("../controllers/product.controller");

module.exports = function (app) {
  app.post("/ecomm/api/v1/products", createProduct);

  app.get("/ecomm/api/v1/products", getAllProducts);

  app.get("/ecomm/api/v1/products/:id", getProductById);

  app.put("/ecomm/api/v1/products/:id", updateProduct);

  app.delete("/ecomm/api/v1/products/:id", deleteProduct);

  app.get(
    "/ecomm/api/v1/categories/:categoryId/products",
    getProductInCategory
  );
};
