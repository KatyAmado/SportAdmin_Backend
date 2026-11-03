function validateCreateUser(req, res, next) {
const { nombre_Usuario, contrasena, id_Rol } = req.body;
// Campos obligatorios
if (!nombre_Usuario || !contrasena || id_Rol === undefined) {
return res.status(400).json({
message: 'All fields are required'
});
}
// Nombre de usuario
if (typeof nombre_Usuario !== 'string' || nombre_Usuario.trim().length < 2) {
return res.status(400).json({
message: 'Name must contain at least 2 characters'
});
}
// Contraseña
if (typeof contrasena !== 'string' || contrasena.length < 8) {
return res.status(400).json({
message: 'Password must contain at least 8 characters'
});
}
// Rol
if (!Number.isInteger(id_Rol) || id_Rol <= 0) {
return res.status(400).json({
message: 'Role ID must be a positive integer'
});
}
next();
}

// Validar creación de usuario 
function validateCreateUser(req, res, next) {
  const { nombre_Usuario, contrasena, id_Rol } = req.body;
  // Campos obligatorios
  if (!nombre_Usuario || !contrasena || id_Rol === undefined) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }
  // Nombre de usuario
  if (typeof nombre_Usuario !== 'string' || nombre_Usuario.trim().length < 2) {
    return res.status(400).json({
      message: 'Name must contain at least 2 characters'
    });
  }
  // Contraseña
  if (typeof contrasena !== 'string' || contrasena.length < 8) {
    return res.status(400).json({
      message: 'Password must contain at least 8 characters'
    });
  }
  // Rol
  if (!Number.isInteger(id_Rol) || id_Rol <= 0) {
    return res.status(400).json({
      message: 'Role ID must be a positive integer'
    });
  }
  next();
}

// Validar ID en los parámetros de la ruta
function validateUserId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: 'Invalid user ID'
    });
  }
  next();
}

// Validar actualización 
function validateUpdateUser(req, res, next) {
  const { nombre_Usuario, id_Rol } = req.body;
  if (!nombre_Usuario || id_Rol === undefined) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }
  if (typeof nombre_Usuario !== 'string' || nombre_Usuario.trim().length < 2) {
    return res.status(400).json({
      message: 'Invalid name'
    });
  }
  if (!Number.isInteger(id_Rol) || id_Rol <= 0) {
    return res.status(400).json({
      message: 'Invalid role ID'
    });
  }
  next();
}

// Validar estado (activo/inactivo)
function validateStatus(req, res, next) {
  const { estado } = req.body;
  if (estado !== 0 && estado !== 1) {
    return res.status(400).json({
      message: 'Status must be 0 or 1'
    });
  }
  next();
}

module.exports = {
  validateCreateUser,
  validateUserId,
  validateUpdateUser,
  validateStatus
};
