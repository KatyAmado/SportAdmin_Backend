# SportAdmin Backend

Backend del sistema SportAdmin, desarrollado con Node.js y Express para gestionar la lógica de negocio, autenticación y conexión con MySQL.

## Descripción del proyecto

Este backend está diseñado como base para un sistema administrativo deportivo, con una estructura modular para separar funcionalidades como autenticación, usuarios y módulos futuros del negocio.

Actualmente el proyecto ya cuenta con una base funcional de autenticación y validaciones de seguridad, además de un health check para verificar que la API está activa.

## Funcionalidades implementadas

- Verificación del estado de la API
- Login de usuarios con validación de credenciales
- Generación de JWT para autenticación
- Middleware de autenticación por token Bearer
- Middleware de autorización por roles
- Manejo centralizado de errores
- Conexión a MySQL con pool de conexiones

## Endpoints disponibles

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Verifica que la API está corriendo |
| `POST` | `/api/auth/login` | Permite iniciar sesión con usuario y contraseña |
| `GET` | `/api/users` | Ruta montada en la app, pendiente de implementación de endpoints reales |

### Ejemplo de login

```json
{
  "nombre_Usuario": "admin",
  "contrasena": "123456"
}
```

Respuesta esperada:

```json
{
  "message": "Login successful",
  "data": {
    "token": "jwt_token",
    "user": {
      "id_usuario": 1,
      "nombre_Usuario": "admin",
      "id_Rol": 1
    }
  }
}
```

## Tecnologías

- Node.js
- Express 5
- MySQL con `mysql2/promise`
- JWT para autenticación
- Bcrypt para encriptación de contraseñas
- Dotenv para variables de entorno
- Nodemon para desarrollo

## Requisitos previos

- Node.js instalado
- npm instalado
- MySQL corriendo en local o remoto
- Base de datos creada con la estructura del sistema

## Instalación

1. Ubícate en la carpeta del backend:

```bash
cd SportAdmin_Backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto a partir del ejemplo disponible en `.env.example`.

## Variables de entorno

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=sportadmin
DB_PORT=3306
JWT_SECRET=mi_clave_secreta
JWT_EXPIRES_IN=2h
```

> La variable `JWT_SECRET` es necesaria para firmar los tokens de autenticación.

## Ejecución

### Producción

```bash
npm start
```

### Desarrollo

```bash
npm run dev
```

La API quedará disponible en:

```text
http://localhost:3000
```

Puedes verificar el estado con:

```text
http://localhost:3000/api/health
```

## Estructura del proyecto

```text
SportAdmin_Backend/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── role.middleware.js
│   │   └── error.middleware.js
│   └── modules/
│       ├── auth/
│       │   ├── auth.controller.js
│       │   ├── auth.repository.js
│       │   ├── auth.routes.js
│       │   ├── auth.service.js
│       │   └── auth.validator.js
│       ├── users/
│       │   ├── user.controller.js
│       │   ├── user.repository.js
│       │   ├── user.routes.js
│       │   ├── user.service.js
│       │   └── user.validator.js
│       ├── academico/
│       ├── comunicaciones/
│       ├── Deportistas/
│       └── financiero/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Observaciones

- La autenticación ya está integrada y usa la tabla `usuario` de MySQL.
- El módulo `auth` es la parte que más avance tiene dentro del proyecto.
- Los otros módulos están preparados para continuar la organización del sistema por dominio.
- Todavía falta definir y conectar los endpoints completos de usuarios y otros módulos del negocio.

## Siguientes pasos recomendados

- Completar los controladores y servicios de usuarios
- Definir rutas para módulos de deportistas, académico, financiero y comunicaciones
- Crear validaciones adicionales por roles y permisos
- Añadir pruebas automatizadas
- Documentar cada endpoint con ejemplos de request y response
