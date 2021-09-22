const recipesService = require('../services/recipes');

const createRecipe = async (req, res, next) => {
  const { name, ingredients, preparation, userId } = req.body;

  const { error, result } = await recipesService.createRecipe(
    name,
    ingredients,
    preparation,
    userId,
  );

  if (error) return next(error);

  return res.status(201).json(result);
};

const getRecipes = async (req, res, next) => {
  try {
    const result = await recipesService.getRecipes();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { result, error } = await recipesService.getRecipeById(id);

    if (error) next(error);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
};
