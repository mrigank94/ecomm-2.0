const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `ecomm_db`,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOSTNAME,
    dialect: "mysql",
  }
);

const Cart = require("./cart.model")(sequelize, Sequelize);
const Category = require("./category.model")(sequelize, Sequelize);
const Product = require("./product.model")(sequelize, Sequelize);
const User = require("./user.model")(sequelize, Sequelize);

module.exports = {
  Cart,
  Category,
  Product,
  User,
  sequelize,
};
