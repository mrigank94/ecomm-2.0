module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.BIGINT,
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
