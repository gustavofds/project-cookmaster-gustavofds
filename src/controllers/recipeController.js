const recipeService = require('../services/recipeService');

const create = async (req, res) => {
  const recipe = req.body;
  const { user } = req;

  const { createdRecipe, message, code } = await recipeService.create(recipe);

  if (message) return res.status(code).json({ message });

  return res.status(201).json({recipe: {...createdRecipe, userId: user._id}});
};

const getAll = async (req, res) => {
  const recipes = await recipeService.getAll();
  return res.status(200).json(recipes);
}

const find = async (req, res) => {
  const { id } = req.params;

  const recipe = await recipeService.find(id);
  return res.status(200).json(recipe);
}

module.exports = {
  create,
  getAll,
  find,
}
