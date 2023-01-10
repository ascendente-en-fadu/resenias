# Reseñas FADU frontend

Frontend de la página de reseñas de [@ascendente_en_fadu](https://www.instagram.com/ascendente_en_fadu/?hl=es).

## Sobre el desarrollo

#### Levantar el proyecto

En teoría, ejecutar npm install y después npm start desde este mismo directorio, debería levantar el proyecto en la URL http://localhost:3000.

#### Algunas convenciones

- Todo el código, los comentarios y los nombres de los commits tienen que estar en inglés.
- Todo el código debe respetar la configuración de estilo y sintaxis de Prettier y ESLint (ambas extensiones están configuradas como _recomendadas_ para el proyecto).

#### Diseño de UI

Los diseños de UI están en el directorio `ui_design`, junto con algunas indicaciones adicionales.

#### Mockear el Backend

Tenemos configurado un un mock del backend hecho con [json-server](https://github.com/typicode/json-server). Para correrlo, ejecutar `npm run start-mock`. Para modificar las respuestas del mock, modificar el archivo `db.json`. La idea es que este mock, la colección del Postman y el backend coincidan siempre en sus rutas y en las estructuras de sus respuestas.
