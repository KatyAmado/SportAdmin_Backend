# SportAdmin Backend

Backend del sistema SportAdmin, desarrollado con Node.js y Express para gestionar la lógica de negocio, autenticación, persistencia en base de datos relacional y conexión con MySQL.

## Descripción del proyecto

Este backend está diseñado como base para un sistema administrativo deportivo, estructurado bajo una arquitectura modular por dominios para separar funcionalidades clave como autenticación, gestión de deportistas, módulos académico, financiero y de comunicaciones.

Actualmente el proyecto cuenta con conexión persistente a MySQL mediante un pool de conexiones, endpoints funcionales de autenticación y el módulo integrado de gestión de deportistas conectado a la base de datos real.

## Funcionalidades implementadas

- Verificación del estado de la API (`/api/health`)
- Login de usuarios con validación de credenciales
- Generación de JWT para autenticación y middlewares de autorización por roles
- Conexión persistente a MySQL mediante `mysql2` y pool de conexiones
- Módulo completo de **Deportistas** conectado a la base de datos (`deportista`) con operaciones de consulta y estructurado por capas (`routes`, `controller`, `service`, `repository`)
- Manejo centralizado de errores y variables de entorno

## Endpoints disponibles

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Verifica que la API está corriendo |
| `POST` | `/api/auth/login` | Permite iniciar sesión con usuario y contraseña |
| `GET` | `/api/deportistas` | Obtiene la lista completa de deportistas desde la base de datos MySQL |
| `POST` | `/api/deportistas` | Registra un nuevo deportista en la base de datos |

### Ejemplo de respuesta: `/api/deportistas`

```json
{
  "success": true,
  "data": []
}

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
- Base de datos (sportadmin) creada con sus respectivas tablas

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
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=sportadmin
DB_PORT=3306
JWT_SECRET=tu_clave_secreta
JWT_EXPIRES_IN=2h

Ejecuta el servidor en modo desarrollo:

```Bash
npm run dev
```
La API quedará disponible en http://localhost:3000.


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
│       │   ├── academico.repository.js
│       │   ├── academico.routes.js
│       │   ├── academico.service.js
│       │   └── academico.controller.js
│       ├── comunicaciones/
│       │   ├── comunicaciones.repository.js
│       │   ├── comunicaciones.routes.js
│       │   ├── comunicaciones.service.js
│       │   └── comunicaciones.controller.js
│       ├── Deportistas/
│       │   ├── deportistas.repository.js
│       │   ├── deportistas.routes.js
│       │   ├── deportistas.service.js
│       │   └── deportistas.controller.js
│       └── financiero/
│       │   ├── financiero.repository.js
│       │   ├── financiero.routes.js
│       │   ├── financiero.service.js
│       │   └── financiero.controller.js
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

- Conectar los siguientes submódulos (académico, financiero y comunicaciones) a MySQL
- Ampliar las pruebas de inserción y consumo de endpoints desde Postman
- Integrar las peticiones del frontend con los endpoints reales del backend
- Crear validaciones adicionales por roles y permisos
- Añadir pruebas automatizadas
- Documentar cada endpoint con ejemplos de request y response
