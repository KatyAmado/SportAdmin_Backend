const comunicacionesService = require('./comunicaciones.service');

async function listarComunicados(req, res, next) {
  try {
    const data = await comunicacionesService.obtenerComunicados();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function crearComunicado(req, res, next) {
  try {
    const nuevo = await comunicacionesService.guardarComunicado(req.body);
    res.status(201).json({ success: true, message: "Comunicado creado con éxito", data: nuevo });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarComunicados, crearComunicado };