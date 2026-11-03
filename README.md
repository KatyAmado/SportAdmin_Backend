# SportAdmin Backend

API backend de SportAdmin, desarrollada con Node.js y Express. El servidor utiliza MySQL para la conexión a datos y carga su configuración desde variables de entorno.

## Estado actual

La aplicación expone actualmente un endpoint de comprobación de estado:

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Confirma que la API está activa. |

Respuesta de ejemplo:

```json
{
	"status": "ok",
	"message": "sportadmin API is running"
}
```

El servidor verifica la conexión a MySQL antes de empezar a escuchar solicitudes. Las carpetas `academico`, `auth`, `comunicaciones`, `Deportistas`, `financiero` y `users` están previstas para organizar módulos; sus endpoints todavía no están implementados ni registrados en la aplicación.

## Tecnologías

- Node.js
- Express 5
- MySQL mediante `mysql2/promise`
- `dotenv` para cargar variables de entorno
- `nodemon` para desarrollo

## Requisitos

- Node.js y npm instalados.
- Un servidor MySQL accesible.
- Una base de datos configurada para la aplicación.

## Instalación y configuración

Desde la carpeta `SportAdmin_Backend`, instala las dependencias:

```bash
npm install
```

Crea un archivo `.env` en esta carpeta con los datos de conexión. Puedes partir de `.env.example` y completar la contraseña según la configuración de tu servidor:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=sportadmin
DB_PORT=3306
```

La base de datos indicada en `DB_NAME` debe existir y las credenciales deben permitir la conexión. El proyecto todavía no incluye migraciones ni creación automática del esquema.

## Ejecución

Inicia el servidor:

```bash
npm start
```

Para desarrollo con reinicio automático al cambiar archivos:

```bash
npm run dev
```

Con la configuración predeterminada, la API queda disponible en `http://localhost:3000`. Comprueba su estado en `http://localhost:3000/api/health`.

## Estructura

```text
src/
	app.js                 Configura Express y las rutas de la aplicación
	server.js              Comprueba MySQL e inicia el servidor HTTP
	config/
		database.js          Configura el pool de conexiones MySQL
	modules/
		academico/
		auth/
		comunicaciones/
		Deportistas/
		financiero/
		users/
```

Los directorios de módulos están destinados a separar las funcionalidades del sistema a medida que se implementen.

## Pruebas

No hay pruebas automatizadas configuradas todavía. El comando `npm test` conserva por ahora el marcador predeterminado de npm y termina con error.
