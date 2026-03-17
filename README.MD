# Sistema: Plataforma de productos (tipo e-commerce básico)

## Servicios

1. Frontend (web)
Interfaz para que el usuario vea productos.

2. Backend
Gestiona la lógica del sistema y responde peticiones.

3. Base de datos
Almacena la información de productos.

## Comunicación

- Frontend -> Backend (HTTP)
- Backend -> Base de datos (conexión interna)

## Si un servicio falla

- Si falla el backend: el frontend no carga datos
- Si falla la base de datos: el backend no puede responder
- Si falla el frontend: el usuario no puede acceder