const academicoService = require('./academico.service');

async function listarAcademico(req, res, next) {
  try {
    const datos = await academicoService.obtenerDatosAcademicos();
    res.status(200).json({ success: true, data: datos });
  } catch (error) {
    next(error);
  }
}

async function registrarAsistencia(req, res, next) {
  try {
    const resultado = await academicoService.guardarAsistencia(req.body);
    res.status(201).json({ success: true, message: "Asistencia registrada con éxito", data: resultado });
  } catch (error) {
    next(error);
  }
}

async function registrarExamen(req, res, next) {
  try {
    const resultado = await academicoService.guardarExamen(req.body);
    res.status(201).json({ success: true, message: "Examen de grado registrado con éxito", data: resultado });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarAcademico, registrarAsistencia, registrarExamen };