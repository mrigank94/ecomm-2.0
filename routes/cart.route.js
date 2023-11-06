const {
  createCart,
  getCartById,
  deleteCart,
  updateCart,
} = require("../controllers/cart.controller");
const { verifyJwt } = require("../middlewares/authJwt");

module.exports = function (app) {
  app.post("/ecomm/api/v1/carts", [verifyJwt], createCart);

  app.get("/ecomm/api/v1/carts/:id", [verifyJwt], getCartById);

  app.delete("/ecomm/api/v1/carts/:id", [verifyJwt], deleteCart);

  app.put("/ecomm/api/v1/carts/:id", [verifyJwt], updateCart);
};
