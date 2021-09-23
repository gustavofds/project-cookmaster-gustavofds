const express = require('express');
const bodyParser = require('body-parser');

const usersControllers = require('../controllers/usersControllers');
const validateJWT = require('../middlewares/validateJWT');
const recipesControllers = require('../controllers/recipesControllers');

const app = express();
app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});

app.post('/users', usersControllers.create);
app.post('/login', usersControllers.login);
app.post('/recipes', validateJWT, recipesControllers.create);
app.get('/recipes', recipesControllers.getAll);
app.get('/recipes/:_id', recipesControllers.getById);
app.put('/recipes/:_id', validateJWT, recipesControllers.update);
app.delete('/recipes/:_id', validateJWT, recipesControllers.deleteOne);
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
