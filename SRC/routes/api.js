var express = require('express');
var router = express.Router();
var apiController = require('../Controllers/api.controller');

router.get('/livros', apiController.getLivros);

router.get('/livros/:id', apiController.getLivros);
router.post('/livros', apiController.create); 
router.delete('/livros/:id', apiController.deletaLivro); 