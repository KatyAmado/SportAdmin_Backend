const financieroRepository = require('./financiero.repository');

async function obtenerFinanzas() {
  return await financieroRepository.obtenerTransacciones();
}

async function procesarPago(data) {
  return await financieroRepository.insertarTransaccion(data);
}

module.exports = { obtenerFinanzas, procesarPago };