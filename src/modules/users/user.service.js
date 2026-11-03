const bcrypt = require('bcrypt');
const userRepository = require('./user.repository');

// Crear usuario
async function createUser(userData) {
  const { nombre_Usuario, contrasena, id_Rol } = userData;
  
  // El usuario debe ser único
  const existingUser = await userRepository.findByUsername(nombre_Usuario);
  if (existingUser) {
    const error = new Error('Username is already registered');
    error.status = 409;
    throw error;
  }
  
  // El rol debe existir
  const role = await userRepository.findRoleById(id_Rol);
  if (!role) {
    const error = new Error('Role does not exist');
    error.status = 400;
    throw error;
  }
  
  // Proteger contraseña
  const hashedPassword = await bcrypt.hash(contrasena, 10);
  const newUser = {
    nombre_Usuario,
    contrasena: hashedPassword,
    id_Rol
  };
  
  const userId = await userRepository.create(newUser);
  return {
    id_usuario: userId,
    nombre_Usuario,
    id_Rol
  };
}

// Listar usuarios
async function getUsers() {
  return await userRepository.findAll();
}

// Consultar usuario por ID
async function getUserById(id) {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.status = 404;
    throw error;
  }
  return user;
}

// Actualizar usuario
async function updateUser(id, userData) {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.status = 404;
    throw error;
  }

  // Validar que el nombre de usuario no esté en uso por otro ID
  if (userData.nombre_Usuario) {
    const existingUser = await userRepository.findByUsername(userData.nombre_Usuario);
    if (existingUser && existingUser.id_usuario !== Number(id)) {
      const error = new Error('Username is already registered');
      error.status = 409;
      throw error;
    }
  }

  // Validar que el rol exista (manejando id_Rol o id_rol)
  const roleId = userData.id_Rol || userData.id_rol;
  if (roleId) {
    const role = await userRepository.findRoleById(roleId);
    if (!role) {
      const error = new Error('Role does not exist');
      error.status = 400;
      throw error;
    }
  }

  await userRepository.update(id, userData);
  return await userRepository.findById(id);
}

// Cambiar estado
async function changeUserStatus(id, estado) {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.status = 404;
    throw error;
  }
  await userRepository.updateStatus(id, estado);
  return await userRepository.findById(id);
}

// Eliminación lógica
async function deleteUser(id) {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.status = 404;
    throw error;
  }
  await userRepository.softDelete(id);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  changeUserStatus,
  deleteUser
};
