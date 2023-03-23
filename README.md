# Reseñas FADU

Página de reseñas para cátedras de FADU de [@ascendente_en_fadu](https://www.instagram.com/ascendente_en_fadu/?hl=es).  
Actualmente disponible en [http://reseñasfadu.com.ar/](http://xn--reseasfadu-w9a.com.ar/).

## Sobre el desarrollo

#### Iniciar el proyecto

Para iniciar el proyecto por primera vez, se deben seguir los siguientes pasos:
1) Crear los archivos `.env` y `frontend/.env`, copiando el contenido de los `.env.example`. En el caso del frontend, es necesario copiar un client-id válido en la variable `REACT_APP_GOOGLE_CLIENT_ID` para que el login funcione correctamente. Si se va a ejecutar el proyecto en un entorno local, se deben remplazar las variables `REACT_APP_BASE_URL` y `DOMAIN` en ambos archivos por `'http://localhost:8000/api'` y `localhost` respectivamente.
2) Ejecutar `docker-compose build` para compilar las imágenes Docker.
3) Ejecutar `docker-compose up -d` para iniciar los contenedores Docker.
4) Ejecutar `docker-compose exec backend sh` para ingresar a la terminal del contenedor del backend.
5) Ejecutar `python3 manage.py collectstatic` para copiar todos los archivos estáticos del cliente de Django.
6) Ejecutar `python3 manage.py migrate` para realizar las migraciones de la base de datos.
7) Ejecutar `python3 manage.py createsuperuser` e ingresar la información solicitada para crear un usuario de administrador.
8) Salir de la terminal del container con `exit`.
