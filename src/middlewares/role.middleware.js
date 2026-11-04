function authorizeRoles(...allowedRoles) {
  return function (req, res, next) {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required"
      });
    }

    // Cambiado de req.user.role a req.user.id_Rol para que coincida con el middleware de autenticación
    if (!allowedRoles.includes(req.user.id_Rol)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    next();
  };
}

module.exports = authorizeRoles;