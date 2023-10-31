const { Op } = require("sequelize");
const { Category } = require("../models");

async function createCategory(req, res) {
  // req.body = {
  //  name: 'Electronics',
  //  decription: 'Electronics category'
  // }
  try {
    const category = await Category.create(req.body);
    res.status(201).send(category);
  } catch (ex) {
    res.status(400).send({ message: "Bad request for creating category" });
  }
}

async function getAllCategories(req, res) {
  const { name } = req.query;
  const queryObj = {};

  if (name) {
    queryObj.name = {
      [Op.substring]: name,
    };
  }

  const categories = await Category.findAll({
    where: queryObj,
  });

  res.status(200).send(categories);
}

async function getCategoryById(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);

    if (category === null) {
      return res.status(404).send({
        message: `Category with ID: ${req.params.id} does not exist`,
      });
    }

    res.status(200).send(category);
  } catch (ex) {
    res.status(500).send({ message: "Error occurred" });
  }
}

async function updateCategory(req, res) {
  const category = await Category.findByPk(req.params.id);

  if (category === null) {
    return res.status(404).send({
      message: `Category with ID: ${req.params.id} does not exist`,
    });
  }

  const updatedCategory = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.status(200).send(updatedCategory);
}

async function deleteCategory(req, res) {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({ message: "Successfully deleted" });
  } catch (ex) {
    res.status(500).send({ message: "Error occurred" });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
