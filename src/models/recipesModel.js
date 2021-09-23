const { ObjectID } = require('bson');
const connect = require('./connection');

const create = async (userId, name, ingredients, preparation) => {
  const db = await connect();
  const recipe = await db.collection('recipes').insertOne({ name, ingredients, preparation });
  return { _id: recipe.insertedId, name, ingredients, preparation, userId };
};

const getAllRecipes = async () => {
  const db = await connect();
  const recipes = await db.collection('recipes').find({}).toArray();
  return recipes;
};

const getRecipeById = async (id) => {
  if (!ObjectID.isValid(id)) return null;
  const db = await connect();
  const recipe = await db.collection('recipes').findOne({ _id: ObjectID(id) });
  return recipe;
};

const updateRecipe = async (recipeDetails) => {
  const { id, name, ingredients, preparation, userId } = recipeDetails;
  if (!ObjectID.isValid(id)) return null;
  const db = await connect();
  await db.collection('recipes')
    .updateOne({ _id: ObjectID(id) }, { $set: { name, ingredients, preparation } });
  return { _id: id, name, ingredients, preparation, userId };
};

module.exports = {
  create,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
};
