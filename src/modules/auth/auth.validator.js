function validateLogin(req, res, next) {
  const { nombre_Usuario, contrasena } = req.body;
  
  if (
    typeof nombre_Usuario !== "string" ||
    !nombre_Usuario.trim() ||
    typeof contrasena !== "string" ||
    !contrasena
  ) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }
  
  next();
}

module.exports = { validateLogin };