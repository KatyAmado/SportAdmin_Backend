const comunicacionesRepository = require('./comunicaciones.repository');

async function obtenerComunicados() {
  return await comunicacionesRepository.obtenerTodos();
}

async function guardarComunicado(data) {
  return await comunicacionesRepository.insertar(data);
}

module.exports = { obtenerComunicados, guardarComunicado };