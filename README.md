# E-Learning API

API para cursos de e-learning, con endpoints para gestionar cursos, lecciones, preguntas y respuestas.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias: `npm install`
3. Configura tu base de datos MySQL.
4. Renombra el archivo `.env.example` a `.env` y agrega tu configuración.

## Uso

1. Inicia el servidor: `npm start`
2. Accede a la API en `http://localhost:3000`

## Autenticación

Utiliza el token JWT en el encabezado `Authorization` para autenticar las solicitudes. 

## end-points

POST /auth/register
POST /auth/login
GET /courses
POST /courses
PUT /courses/:courseId
DELETE /courses/:courseId
GET /lessons/:courseId
POST /lessons
PUT /lessons/:id
DELETE /lessons/:id
GET /questions/:lessonId
POST /questions
PUT /questions/:id
DELETE /questions/:id
GET /student/courses
GET /student/courses/:courseId/lessons
POST /student/lessons/:lessonId/take

