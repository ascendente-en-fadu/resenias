# Reseñas FADU

Página de reseñas para cátedras de FADU de [@ascendente_en_fadu](https://www.instagram.com/ascendente_en_fadu/?hl=es).  
Actualmente disponible en [http://reseñasfadu.com.ar/](http://xn--reseasfadu-w9a.com.ar/).

## Sobre el desarrollo

#### Iniciar el proyecto

Para iniciar el proyecto por primera vez, se deben seguir los siguientes pasos:
1) Crear los archivos `.env` y `frontend/.env`, copiando el contenido de los `.env.example`. En el caso del frontend, es necesario copiar un client-id válido en la variable `REACT_APP_GOOGLE_CLIENT_ID` para que el login funcione correctamente.
2) Ejecutar `docker-compose build` para compilar las imágenes Docker.
3) Ejecutar `docker-compose up -d` para iniciar los contenedores Docker.
4) Ejecutar `docker-compose exec backend sh` para ingresar a la terminal del contenedor del backend.
5) Ejecutar `python3 manage.py collectstatic` para copiar todos los archivos estáticos del cliente de Django.
6) Ejecutar `python3 manage.py migrate` para realizar las migraciones de la base de datos.
7) Ejecutar `python3 manage.py createsuperuser` e ingresar la información solicitada para crear un usuario de administrador.
8) Salir de la terminal del container con `exit`.

#### Branching model

El proyecto tiene únicamente 2 ramas permanentes, _master_ y _develop_. La rama _master_ debe ser siempre un reflejo de la última versión productiva, y **sólo puede recibir cambios a través de PRs** surgidos de la rama _develop_. En la rama _develop_ **se pueden crear commits directamente**, y es la que se va a utilizar durante el desarrollo. En caso de que una tarea en particular requiera mucho tiempo de desarrollo, se puede realizar en una rama separada, para no interferir con los otros desarrollos que se hacen sobre _develop_.

#### Lanzamiento de versiones

Una vez que la rama _develop_ está lista para un nuevo lanzamiento, se deben seguir los siguientes pasos:
1) Actualizar el número de versión al que corresponda en el archivo `frontend/package.json`.
1) Crear un PR con origen en _develop_ y destino en _master_.
2) Agregar una descripción de los cambios hechos **a nivel técnico**.
3) Mergear el PR
4) Iniciar la creación de un nuevo release en la sección de Releases de GitHub. Nombrar al release como `vx.x.x` (siendo `x.x.x` el número de versión).
5) Desde esa misma sección, crear un tag para la versión, con el nombre `vx.x.x` (siendo `x.x.x` el número de versión).
2) Agregar una descripción de los cambios hechos **a nivel funcional**.
6) Generar el release.
7) Hacer un pull de los cambios en el host y regenerar las imágenes y los containers usando el script `docker-regenerate.sh`.
