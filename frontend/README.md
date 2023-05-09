# Reseñas FADU frontend

Frontend de la página de reseñas de [@ascendente_en_fadu](https://www.instagram.com/ascendente_en_fadu/?hl=es).

## Sobre el desarrollo

#### Ejecutar el proyecto

Teniendo Node instalado, ejecutar `npm install` y después `npm start` desde este mismo directorio debería ejecutar el proyecto en la URL http://localhost:3000.

#### Algunas convenciones

- Todo el código, los comentarios y los nombres de los commits tienen que estar en inglés.
- Todo el código debe respetar la configuración de estilo y sintaxis de Prettier y ESLint (ambas extensiones están configuradas como _recomendadas_ para el proyecto).

#### Diseño de UI

Los diseños de UI están en el directorio `ui_design`, junto con algunas convenciones de estilo.

#### Mockear el Backend

Tenemos configurado un mock del backend hecho con [json-server](https://github.com/typicode/json-server). Para correrlo, ejecutar `npm run start-mock` y cambiar la variable de entorno `REACT_APP_BASE_URL` por `http://localhost:3004/api` en el archivo `frontend/.env`. Para modificar las respuestas del mock, modificar el archivo `db.json`. La idea es que este mock, la colección de Postman y el backend coincidan siempre en sus rutas y en las estructuras de sus respuestas.

Adicionalmente, se pueden especificar los siguientes parámetros en la ejecución el mock:

- `ip` para permitir que dispositivos en la misma red local puedan llamar al mock.
- `delay` para añadir un delay a todas las respuestas del mock.

Ejemplo de uso: `npm run start-mock --ip=192.168.0.1 --delay=2000`
