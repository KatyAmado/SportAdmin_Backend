const pool = require("../../config/database");

async function findByUsername(nombre_Usuario) {
  const [rows] = await pool.execute(
    `SELECT
      id_usuario,
      nombre_Usuario,
      contrasena,
      id_Rol,
      estado
    FROM usuario
    WHERE nombre_Usuario = ?
    AND deleted_at IS NULL`,
    [nombre_Usuario]
  );
  return rows[0];
}

async function findById(id) {
  const [rows] = await pool.execute(
    `SELECT
      id_usuario,
      nombre_Usuario,
      id_Rol,
      estado
    FROM usuario
    WHERE id_usuario = ?
    AND deleted_at IS NULL`,
    [id]
  );
  return rows[0];
}

module.exports = {
  findByUsername,
  findById
};