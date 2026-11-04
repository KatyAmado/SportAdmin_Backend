const express = require('express');
const userRoutes = require('./modules/users/user.routes');
const errorHandler = require('./middlewares/error.middleware');
const app = express();
const authRoutes = require("./modules/auth/auth.routes");

app.use(express.json());
// Comprobación del servidor
app.get('/api/health', (req, res) => {
res.status(200).json({
status: 'ok',
message: 'sportadmin API is running'
});
});
// Rutas de usuarios
app.use('/api/users', userRoutes);

app.use("/api/auth", authRoutes);

// Middleware global de errores
app.use(errorHandler);
module.exports = app;