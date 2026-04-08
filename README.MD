# Sistema: Plataforma de servicios SPA (tipo e-commerce básico)

## Descripción: 
Se desarrolló un sistema básico tipo e-commerce diseñado para la venta de servicios de spa e implementa una arquitectura de microservicios con Docker Compose, compuesto por frontend, backend y base de datos.

El sistema permite visualizar servicios disponibles, seleccionarlos y gestionarlos mediante un carrito interactivo, integrando frontend, backend y base de datos.

## Servicios

1. Frontend (web)
Interfaz web desarrollada con HTML, CSS Y JavaScript, encargada de mostrar los servicios disponibles y permitir la interacción del usuario.

2. Backend
Servidor desarrollado en Node.js que gestiona la lógica del sistema y expone endpoints para consultar los servicios.

3. Base de datos
MySQL encargado de almacenar la información de los servicios disponibles.

## Comunicación

- Frontend: Consume satos del Backend mediante peticiones HTTP
- Backend: Se conecta a la Base de datos usando una red interna de Docker

## Si un servicio falla

- Si falla el backend: el frontend no carga datos 
- Si falla la base de datos: el backend no puede responder
- Si falla el frontend: el usuario no puede interactuar con el sistema

## Ventajas
- Escalabilidad de servicios
- Independencia entre componentes
- Fácil mantenimiento
- Despliegue sencillo mediante contenedores

## Ejecución
1. abrir terminal en la carpeta del proyecto
2. ejecutar el siguiente comando: 
    docker-compose up --build
3. Esperar a que los contenedores se levanten correctamente
4. Abrir en el navegador http://localhost:8080 

## Acceso
- Frontend: http://localhost:8080
- Backend: http://localhost:3000
- Para verificar la base de datos:
    en la terminal:
        docker exec -it mysql_db mysql -u root -p
    escribir contraseña
        root
    en la terminal SQL:
        SHOW DATABASES;
        USE tienda;

        (Para agregar un nuevo servicio)
            INSERT INTO servicios (nombre) 
            VALUES ('Masaje relajante');

        Verifica:
                SELECT * FROM servicios;

        abrir local: http://localhost:8080

        Para el precio: agregarlo en frontend al index.html
            "masaje relajante": 70000

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

## Funcionalidades implementadas
    - Visualización de servicios desde la base de datos
    - Interfaz gráfica con diseño moderno 
    - Selección de servicios
    - carrito interactivo
    - Eliminación de servicios del carrito
    - Cálculo automático del total
    - Persistencia de datos en el navegador mediante localStorage

## Interfaz de usuario
    - Trjetas para cada servicio
    - Animaciones al interactuar
    - Estética basada en tonos pastel
    - Experienncia intuitiva para el usuario

## Tecnologías utilizadas
    -Docker
    - Docker Compose
    - Node.js
    - MySQL
    - HTML. CSS, JavaScript    

## ANÁLISIS

1 ¿Cuál es el rol de cada servicio?
    El sistema está compuesto por tres servicios principales, cada uno con una función específica:
        - Frontend: Se encarga de la interacción con el usuario. Permite visualizar los servicios disponibles, seleccionarlos y gestionarlos en un carrito. Está desarrollado con HTML, CSS y JavaScript.
        - Backend: Gestiona la lógica del sistema. Recibe las solicitudes del frontend, consulta la base de datos y devuelve la información necesaria mediante endpoints HTTP.
        - Bases de datos: (MySQL): Almacena la información de los servicios ofrecidos por el spa, como su nombre.
    Esta separación permite que cada componente cumple una función específica dentro del sistema    

2 ¿Qué ventajas tiene dividir el sistema?
3 ¿Cómo se comunican los contenedores?
