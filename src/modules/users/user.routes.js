const express = require("express");
const authenticate = require("../../middlewares/auth.middleware");
const authorizeRoles = require("../../middlewares/role.middleware");
const userController = require("./user.controller");
const {
  validateCreateUser,
  validateUserId,
  validateUpdateUser,
  validateStatus,
} = require("./user.validator");

const router = express.Router();

// 1. Proteger todas las rutas del módulo con autenticación JWT
router.use(authenticate);

// 2. Definir ruta para consultar el perfil del usuario autenticado (Cualquier rol activo)
// ¡Importante! Debe ir antes de router.get("/:id", ...) para que Express no confunda "me" con un ID.
router.get(
  "/me",
  userController.getMyProfile
);

// 3. Definir endpoints con autorización por rol (Solo id_Rol = 1: Administrador)

// Crear usuario
router.post(
  "/",
  authorizeRoles(1),
  validateCreateUser,
  userController.createUser
);

// Listar usuarios
router.get(
  "/",
  authorizeRoles(1),
  userController.getUsers
);

// Consultar usuario por ID
router.get(
  "/:id",
  authorizeRoles(1),
  validateUserId,
  userController.getUserById
);

// Actualizar usuario
router.put(
  "/:id",
  authorizeRoles(1),
  validateUserId,
  validateUpdateUser,
  userController.updateUser
);

// Cambiar estado (Activar/Inactivar)
router.patch(
  "/:id/status",
  authorizeRoles(1),
  validateUserId,
  validateStatus,
  userController.changeUserStatus
);

// Eliminación lógica (Soft Delete)
router.delete(
  "/:id",
  authorizeRoles(1),
  validateUserId,
  userController.deleteUser
);

module.exports = router;