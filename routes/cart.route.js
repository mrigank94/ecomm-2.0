const {
  createCart,
  getCartById,
  deleteCart,
  updateCart,
} = require("../controllers/cart.controller");

module.exports = function (app) {
  app.post("/ecomm/api/v1/carts", createCart);

  app.get("/ecomm/api/v1/carts/:id", getCartById);

  app.delete("/ecomm/api/v1/carts/:id", deleteCart);

  app.put("/ecomm/api/v1/carts/:id", updateCart);
};
