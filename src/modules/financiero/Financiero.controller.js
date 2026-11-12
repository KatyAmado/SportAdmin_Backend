const financieroService = require('./financiero.service');

async function listarFinanciero(req, res, next) {
  try {
    const data = await financieroService.obtenerFinanzas();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
}

async function registrarPago(req, res, next) {
  try {
    const pago = await financieroService.procesarPago(req.body);
    res.status(201).json({ success: true, message: "Transacción procesada correctamente", data: pago });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarFinanciero, registrarPago };