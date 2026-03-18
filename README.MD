# Sistema: Plataforma de productos (tipo e-commerce básico)

## Descripción: 
Se desarrolló un sistema básico tipo e-commerce utilizando arquitectura de microservicios con Docker Compose, compuesto por frontend, backend y base de datos.

## Servicios

1. Frontend (web)
Interfaz para que el usuario vea productos.

2. Backend
Gestiona la lógica del sistema y responde peticiones.

3. Base de datos
Almacena la información de productos.

## Comunicación

- Frontend: Backend mediante HTTP
- Backend: Base de datos mediante red interna de Docker

## Si un servicio falla

- Si falla el backend: el frontend no carga datos
- Si falla la base de datos: el backend no puede responder
- Si falla el frontend: el usuario no puede acceder a la aplicación

## Ventajas
- Escalabilidad
- Independencia de servicios
- Fácil mantenimiento

## Ejecución
1. abrir terminal en la carpeta del proyecto
2. ejecutar el siguiente comando: 
    docker-compose up --build
3. Esperar a que los contenedores se levanten correctamente

## Acceso
- Frontend: http://localhost:8080
- Backend: http://localhost:3000
- Para verificar la base de datos:
    en la terminal:
        docker exec -it database mysql -u root -p
    escribir contraseña
        root
    en la terminal SQL:
        SHOW DATABASES;

- Para verificar conexion backend + DB:
    Ver los logs del backend:
        docker logs backend_app
    si No hay errores la conexión es correcta aparece 
        found 0 vulnerabilities
        Servidor corriendo en puerto 3000
        Conectado a MySQL
    si hay errores como "ECONNREFUSED" o "Cannot connect to MySQL" entonces falla la conexión

## Base de datos
Motor: MySQL
Base de satos: tienda
Puerto: 3306

## Exploración
- variables de entorno definidas con evironment
- Conexión backend: base de datos usando host database
- Posibles errores:
    Credenciales incorrectas
    Contenedor detenido
    Puerto en uso