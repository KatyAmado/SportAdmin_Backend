const express = require('express');
const cors = require("cors");

const userRoutes = require('./modules/users/user.routes');
const authRoutes = require("./modules/auth/auth.routes");
const academicoRoutes = require('./modules/academico/academico.routes');
const comunicacionesRoutes = require('./modules/comunicaciones/comunicaciones.routes');
const deportistasRoutes = require('./modules/Deportistas/deportistas.routes');
const financieroRoutes = require('./modules/financiero/financiero.routes');

const errorHandler = require('./middlewares/error.middleware');

const app = express();

// Configuración de CORS para permitir solicitudes desde React Vite
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Comprobación del servidor
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'sportadmin API is running'
  });
});

// Rutas de la API (Módulos de SportAdmin)
app.use('/api/users', userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/academico', academicoRoutes);
app.use('/api/comunicaciones', comunicacionesRoutes);
app.use('/api/deportistas', deportistasRoutes); // Puedes usar /api/deportistas o /api/users según prefieras
app.use('/api/financiero', financieroRoutes);

// Middleware global de errores
app.use(errorHandler);

module.exports = app;