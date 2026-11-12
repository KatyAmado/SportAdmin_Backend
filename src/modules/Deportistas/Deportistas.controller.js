const deportistasService = require('./deportistas.service');

async function listarDeportistas(req, res, next) {
  try {
    const data = await deportistasService.obtenerDeportistas();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function crearDeportista(req, res, next) {
  try {
    const nuevo = await deportistasService.guardarDeportista(req.body);
    res.status(201).json({ success: true, message: "Deportista registrado con éxito", data: nuevo });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarDeportistas, crearDeportista };