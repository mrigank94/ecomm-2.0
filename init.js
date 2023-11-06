const { User, Category, Product, Cart } = require("./models");
const bcrypt = require("bcrypt");

const init = async () => {
  await User.bulkCreate([
    {
      name: "sasi",
      email: "sasi@gmail.com",
      userId: "sasi",
      password: bcrypt.hashSync("sasi", 10),
      userType: "CUSTOMER",
      userStatus: "APPROVED",
    },
    {
      name: "mrigank",
      email: "mrigank@gmail.com",
      userId: "mrigank",
      password: bcrypt.hashSync("mrigank", 10),
      userType: "ADMIN",
      userStatus: "APPROVED",
    },
  ]);

  await Category.bulkCreate([
    {
      name: "Fashion",
      description: "Fashion category",
    },
    {
      name: "Electronics",
      description: "Electronics category",
    },
  ]);

  await Product.bulkCreate([
    {
      categoryId: 1,
      name: "Levis jeans",
      imageUrl: "www.levisjeans.com",
      description: "very nice jeans",
      price: 2000,
    },
    {
      categoryId: 1,
      name: "Allen solly tshirt",
      imageUrl: "www.sollyshirt.com",
      description: "very nice tshirt",
      price: 1000,
    },
    {
      categoryId: 2,
      name: "LG TV",
      imageUrl: "www.lgtv.com",
      description: "very nice tv",
      price: 50000,
    },
    {
      categoryId: 2,
      name: "Mobile phones",
      imageUrl: "www.redmiphone.com",
      description: "very nice phone",
      price: 15000,
    },
  ]);

  await Cart.bulkCreate([
    {
      userId: "sasi",
      productId: 2,
      quantity: 2,
    },

    {
      userId: "sasi",
      productId: 3,
      quantity: 1,
    },
  ]);
};

module.exports = init;
