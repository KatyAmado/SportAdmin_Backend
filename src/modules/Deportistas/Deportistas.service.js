const deportistasRepository = require('./deportistas.repository');

async function obtenerDeportistas() {
  return await deportistasRepository.obtenerTodos();
}

async function guardarDeportista(data) {
  return await deportistasRepository.insertar(data);
}

module.exports = { obtenerDeportistas, guardarDeportista };