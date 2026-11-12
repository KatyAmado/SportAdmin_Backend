const academicoRepository = require('./academico.repository');

async function obtenerDatosAcademicos() {
  return await academicoRepository.obtenerAsistenciasYExamenes();
}

async function guardarAsistencia(data) {
  return await academicoRepository.insertarAsistencia(data);
}

async function guardarExamen(data) {
  return await academicoRepository.insertarExamen(data);
}

module.exports = { obtenerDatosAcademicos, guardarAsistencia, guardarExamen };