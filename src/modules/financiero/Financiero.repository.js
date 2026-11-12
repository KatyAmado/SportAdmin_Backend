async function obtenerTransacciones() {
  return [
    { id_Transaccion: "TX-001", concepto: "Mensualidad Noviembre", monto: 150000, fecha_Pago: "2026-11-01" }
  ];
}

async function insertarTransaccion(data) {
  return data;
}

module.exports = { obtenerTransacciones, insertarTransaccion };