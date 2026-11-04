const authService = require("./auth.service");

async function login(req, res, next) {
  try {
    const { nombre_Usuario, contrasena } = req.body;
    
    const result = await authService.login(
      nombre_Usuario,
      contrasena
    );
    
    return res.status(200).json({
      message: "Login successful",
      data: result
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { login };