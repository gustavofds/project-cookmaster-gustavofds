const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

const create = async (name, ingredients, preparation, userId) => {
  const recipeCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('recipes'));
  const { insertedId: _id } = await recipeCollection
    .insertOne({ name, ingredients, preparation, userId });
  
  return {
    _id,
    name,
    ingredients,
    preparation,
    userId,
  };
};

const getAll = async () => {
  const recipeCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('recipes'));

  return recipeCollection.find().toArray();
};

const getById = async (_id) => {
  const recipeCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('recipes'));
  const recipe = await recipeCollection.findOne({ _id: ObjectId(_id) });
  console.log(recipe);
  return recipe;
};

const update = async (name, ingredients, preparation, _id) => {
  const recipeCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('recipes'));

  await recipeCollection
    .updateOne({ _id: ObjectId(_id) }, { $set: { name, ingredients, preparation } });
  const recipeUpdated = await getById(_id);
  return recipeUpdated;
};

const deleteOne = async (_id) => {
  const recipeCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('recipes'));
  console.log(_id);
  await recipeCollection.deleteOne({ _id: ObjectId(_id) });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteOne,
};
