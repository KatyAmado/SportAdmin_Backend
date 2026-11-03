const pool = require('../../config/database');
// Buscar usuario por correo
async function findByUsername(nombre_Usuario) {
  const [rows] = await pool.execute(
    'SELECT id_Usuario, nombre_Usuario FROM usuario WHERE nombre_Usuario = ?',
    [nombre_Usuario]
  );
  return rows[0];
}
// Buscar rol por ID
async function findRoleById(roleId) {
const [rows] = await pool.execute(
'SELECT id_Rol FROM rol WHERE id_Rol = ?',
[roleId]
);
return rows[0];
}
// Crear usuario
async function create(user) {
const { nombre_Usuario, contrasena, id_Rol } = user;
const [result] = await pool.execute(
`INSERT INTO usuario
(nombre_Usuario, contrasena, id_Rol)
VALUES (?, ?,  ?)`,
[nombre_Usuario, contrasena, id_Rol]
);
return result.insertId;
}

// listar usurios

// Buscar rol por ID
async function findRoleById(roleId) {
  const [rows] = await pool.execute(
    'SELECT id_Rol FROM rol WHERE id_Rol = ?',
    [roleId]
  );
  return rows[0];
}

// Buscar usuario por nombre de usuario (para validar unicidad)
async function findByUsername(nombre_Usuario) {
  const [rows] = await pool.execute(
    `SELECT id_usuario, nombre_Usuario, contrasena, id_Rol, estado, deleted_at
     FROM usuario
     WHERE nombre_Usuario = ?
     AND deleted_at IS NULL`,
    [nombre_Usuario]
  );
  return rows[0];
}

// Crear usuario
async function create(user) {
  const { nombre_Usuario, contrasena, id_Rol } = user;
  const [result] = await pool.execute(
    `INSERT INTO usuario (nombre_Usuario, contrasena, id_Rol, estado)
     VALUES (?, ?, ?, 1)`,
    [nombre_Usuario, contrasena, id_Rol]
  );
  return result.insertId;
}

// Listar usuarios activos
async function findAll() {
  const [rows] = await pool.execute(
    `SELECT
       u.id_usuario,
       u.nombre_Usuario,
       u.estado,
       r.id_Rol,
       r.nombre_Rol AS rol
     FROM usuario u
     INNER JOIN rol r ON u.id_Rol = r.id_Rol
     WHERE u.deleted_at IS NULL`
  );
  return rows;
}

// Buscar usuario por ID
async function findById(id) {
  const [rows] = await pool.execute(
    `SELECT
       u.id_usuario,
       u.nombre_Usuario,
       u.estado,
       r.id_Rol,
       r.nombre_Rol AS rol
     FROM usuario u
     INNER JOIN rol r ON u.id_Rol = r.id_Rol
     WHERE u.id_usuario = ?
     AND u.deleted_at IS NULL`,
    [id]
  );
  return rows[0];
}

// Actualizar usuario
async function update(id, user) {
  const { nombre_Usuario, id_Rol } = user;
  const [result] = await pool.execute(
    `UPDATE usuario
     SET nombre_Usuario = ?, id_Rol = ?
     WHERE id_usuario = ?
     AND deleted_at IS NULL`,
    [nombre_Usuario, id_Rol, id]
  );
  return result.affectedRows;
}

// Cambiar estado (Activo/Inactivo)
async function updateStatus(id, estado) {
  const [result] = await pool.execute(
    `UPDATE usuario
     SET estado = ?
     WHERE id_usuario = ?
     AND deleted_at IS NULL`,
    [estado, id]
  );
  return result.affectedRows;
}

// Eliminación lógica (Soft Delete)
async function softDelete(id) {
  const [result] = await pool.execute(
    `UPDATE usuario
     SET deleted_at = NOW(),
         estado = 0
     WHERE id_usuario = ?
     AND deleted_at IS NULL`,
    [id]
  );
  return result.affectedRows;
}

module.exports = {
  findRoleById,
  findByUsername,
  create,
  findAll,
  findById,
  update,
  updateStatus,
  softDelete
};
