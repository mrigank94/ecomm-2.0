module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    userId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productId: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Cart;
};
