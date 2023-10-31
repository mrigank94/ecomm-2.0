const { Cart, Product } = require("../models");

async function createCart(req, res) {
  /* {
    userId: userId,
    products: [{
      id: ,
      name: ,
      description: ,
      quantity
    }, {
      id: ,
      name: ,
      description: ,
      quantity
    }]
  }*/

  let cart = req.body;

  console.log(req.body);
  let createdItems = [];

  for (let i = 0; i < cart.products.length; i++) {
    let item = {
      userId: cart.userId,
      productId: cart.products[i].id,
      quantity: cart.products[i].quantity,
    };

    const createdItem = await Cart.create(item);
    createdItems.push(createdItem);
  }

  res.status(201).send(createdItems);
}

async function deleteCart(req, res) {
  try {
    await Cart.destroy({
      where: {
        userId: req.params.id,
      },
    });

    res.status(200).send({ message: "Succesfully deleted" });
  } catch (ex) {
    res.status(500).send({ message: "Error occured" });
  }
}

async function getCartById(req, res) {
  /* cart = {
    id: cartId,
    userId: userId,
    products: [{
      id: ,
      name: ,
      description: ,
    }, {
      id: ,
      name: ,
      description: ,
    },
    totalCost: 123]
  }


  1 mrigank product1 2
  1 mrigank product2 5

  product1 TV    10000
  product2 Jeans 500
  */

  try {
    const cart = await Cart.findAll({ where: { userId: req.params.id } });

    if (cart === null || cart.length === 0) {
      res.status(404).send({
        message: `Cart with Id : ${req.params.id} does not exist`,
      });
    }

    let items = cart;
    let totalCost = 0;
    let products = [];

    console.log(items);

    for (let i = 0; i < items.length; i++) {
      const product = await Product.findOne({
        where: { id: items[i].productId },
      });
      products.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: items[i].quantity,
      });

      totalCost += items[i].quantity * product.price;
    }
    res.status(200).send({
      userId: cart[0].userId,
      products,
      totalCost,
    });
  } catch (ex) {
    console.log(ex);
    res.status(500).send({ message: "Error occured" });
  }
}

async function updateCart(req, res) {
  // id of the cart

  /* 
  
  id = 1
  
  {
    userId: userId,
    products: [{
      id: product1,
      quantity: 3
    }}],


    1 mrigank product1 2
    1 mrigank product2 5

    product1 TV    10000
    product2 Jeans 500

  }*/

  let cart = req.body;
  let updatedItems = [];

  for (let i = 0; i < cart.products.length; i++) {
    console.log(req.params.id);
    console.log(cart.products[i]);

    const updatedItem = await Cart.update(
      {
        quantity: cart.products[i].quantity,
      },
      {
        where: {
          userId: req.params.id,
          productId: cart.products[i].id,
        },
      }
    );

    updatedItems.push(updatedItem);
  }

  res.status(201).send(updatedItems);
}

module.exports = {
  createCart,
  deleteCart,
  getCartById,
  updateCart,
};
