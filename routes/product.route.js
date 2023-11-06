const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductInCategory,
} = require("../controllers/product.controller");
const { verifyAdmin } = require("../middlewares/authJwt");

module.exports = function (app) {
  app.post("/ecomm/api/v1/products", [verifyAdmin], createProduct);

  app.get("/ecomm/api/v1/products", getAllProducts);

  app.get("/ecomm/api/v1/products/:id", getProductById);

  app.put("/ecomm/api/v1/products/:id", [verifyAdmin], updateProduct);

  app.delete("/ecomm/api/v1/products/:id", [verifyAdmin], deleteProduct);

  app.get(
    "/ecomm/api/v1/categories/:categoryId/products",
    getProductInCategory
  );
};
