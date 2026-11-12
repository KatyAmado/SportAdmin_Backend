const express = require('express');
const router = express.Router();
const financieroController = require('./financiero.controller');

router.get('/', financieroController.listarFinanciero);
router.post('/pago', financieroController.registrarPago);

module.exports = router;