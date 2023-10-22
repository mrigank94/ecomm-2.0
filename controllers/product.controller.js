const { Op } = require("sequelize");
const { Product } = require("../models");

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (ex) {
    res.status(400).send({ message: "Bad request for creatng category" });
  }
}

async function getAllProducts(req, res) {
  const { name, maxCost, minCost } = req.query;
  const queryObj = {};

  if (name) {
    queryObj.name = {
      [Op.substring]: name,
    };
  }

  if (minCost && maxCost) {
    queryObj.cost = {
      [Op.gte]: minCost,
      [Op.lte]: maxCost,
    };
  }

  if (minCost) {
    queryObj.cost = {
      [Op.gte]: minCost,
    };
  }

  if (maxCost) {
    queryObj.cost = {
      [Op.lte]: maxCost,
    };
  }

  const products = await Product.findAll({
    where: queryObj,
  });

  res.status(200).send(products);
}

async function getProductById(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);

    if (product === null) {
      return res.status(404).send({
        message: `Product with ID: ${req.params.id} does not exist`,
      });
    }

    res.status(200).send(product);
  } catch (ex) {
    res.status(500).send({ message: "Error occurred" });
  }
}

async function deleteProduct(req, res) {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({ message: "Successfully deleted" });
  } catch (ex) {
    res.status(500).send({ message: "Error occurred" });
  }
}

async function updateProduct(req, res) {
  const product = await Product.findByPk(req.params.id);

  if (product === null) {
    return res.status(404).send({
      message: `Product with ID: ${req.params.id} does not exist`,
    });
  }

  const updatedProduct = await Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.status(200).send(updatedProduct);
}

async function getProductInCategory(req, res) {
  const { categoryId } = req.params;

  const products = await Product.findAll({
    where: {
      categoryId: categoryId,
    },
  });

  res.status(200).send(products);
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductInCategory,
};
