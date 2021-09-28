const express = require('express');

const router = express.Router();

const ControllerRecipes = require('../controllers/ControllerRecipes');
const Middlewares = require('../middlewares');

router.post('/', Middlewares.validRecipe, ControllerRecipes.create);
router.get('/', ControllerRecipes.getAll);

module.exports = router;
