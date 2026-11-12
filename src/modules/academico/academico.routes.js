const express = require('express');
const router = express.Router();
const academicoController = require('./academico.controller');

router.get('/', academicoController.listarAcademico);
router.post('/asistencia', academicoController.registrarAsistencia);
router.post('/examen', academicoController.registrarExamen);

module.exports = router;