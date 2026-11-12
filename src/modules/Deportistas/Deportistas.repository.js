const db = require('../../config/database');

async function obtenerTodos() {
  const [rows] = await db.query(`
    SELECT identificacion_Deportista, nombre_Completo, correo_Electronico, grado_Actual 
    FROM deportista
  `);
  return rows;
}

async function insertar(data) {
  const { identificacion_Deportista, nombre_Completo, correo_Electronico, grado_Actual } = data;
  const [result] = await db.query(`
    INSERT INTO deportista (identificacion_Deportista, nombre_Completo, correo_Electronico, grado_Actual) 
    VALUES (?, ?, ?, ?)
  `, [identificacion_Deportista, nombre_Completo, correo_Electronico, grado_Actual]);
  
  return result;
}

module.exports = { obtenerTodos, insertar };