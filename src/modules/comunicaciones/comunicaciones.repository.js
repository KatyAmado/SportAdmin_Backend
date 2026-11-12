async function obtenerTodos() {
  return [
    { id_Comunicado: 1, asunto: "Prueba de Ascenso", contenido: "Apertura de pruebas de ascenso de grado.", fecha_Envio: "2026-11-10" }
  ];
}

async function insertar(data) {
  return data;
}

module.exports = { obtenerTodos, insertar };