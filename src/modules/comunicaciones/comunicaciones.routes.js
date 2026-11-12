const express = require('express');
const router = express.Router();
const comunicacionesController = require('./comunicaciones.controller');

router.get('/', comunicacionesController.listarComunicados);
router.post('/', comunicacionesController.crearComunicado);

module.exports = router;