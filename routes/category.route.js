const {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");

module.exports = function (app) {
  app.post("/ecomm/api/v1/categories", createCategory);

  app.get("/ecomm/api/v1/categories", getAllCategories);

  app.get("/ecomm/api/v1/categories/:id", getCategoryById);

  app.delete("/ecomm/api/v1/categories/:id", deleteCategory);

  app.put("/ecomm/api/v1/categories/:id", updateCategory);
};
