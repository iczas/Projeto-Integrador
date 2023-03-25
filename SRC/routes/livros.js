var express = require('express');
var router = express.Router();

/* criar e registrar */
router.get('/create', livrosController.create);
router.post('/register',livrosController.register);

/* listar e listar detalhes*/
router.get('/lista', livrosController.lista);
router.get('/:id', livrosController.lista); 

/* atualizar */
router.get('/update/:id', livrosController.update);
router.post('/process-update/:id',livrosController.processUpdate);

/* Apagar */
router.post('/delete/:id',livrosController.deletalivro);


module.exports = router;
