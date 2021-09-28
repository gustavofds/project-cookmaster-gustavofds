const recipesServices = require('../services/recipesServices');

const create = async (req, res) => {
  const createRecipe = await recipesServices.create(req.body);
  return res.status(createRecipe.status).json(createRecipe.message);
};

const get = async (_req, res) => {
  const recipes = await recipesServices.get();
  return res.status(recipes.status).json(recipes.message);
};

module.exports = { create, get };
