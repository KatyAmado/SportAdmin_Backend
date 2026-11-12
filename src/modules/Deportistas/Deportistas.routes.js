const express = require('express');
const router = express.Router();
const deportistasController = require('./deportistas.controller');

router.get('/', deportistasController.listarDeportistas);
router.post('/', deportistasController.crearDeportista);

module.exports = router;