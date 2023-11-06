const {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");
const {
  middleware1,
  middleware2,
  verifyJwt,
  verifyAdmin,
} = require("../middlewares/authJwt");

module.exports = function (app) {
  app.post("/ecomm/api/v1/categories", [verifyAdmin], createCategory);

  app.get("/ecomm/api/v1/categories", getAllCategories);

  app.get("/ecomm/api/v1/categories/:id", getCategoryById);

  app.delete("/ecomm/api/v1/categories/:id", [verifyAdmin], deleteCategory);

  app.put("/ecomm/api/v1/categories/:id", [verifyAdmin], updateCategory);
};
