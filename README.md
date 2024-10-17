# User Management System

Este proyecto es una aplicación sencilla de gestión de usuarios que permite crear y listar usuarios. Está construido usando **Node.js** y **Express**, con una base de datos MySQL.

## Características

- Crear un nuevo usuario (ID, Email, Número de Teléfono).
- Listar todos los usuarios en una tabla.
- Estilos consistentes utilizando CSS con un diseño limpio y responsivo.

## Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **EJS** para la renderización de vistas.
- **MySQL** para la base de datos.
- **Bootstrap (opcional)** para los estilos básicos.
- **Body-parser** para procesar datos de formularios.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos.

### Pre-requisitos

- Node.js y npm instalados en tu máquina.
- MySQL instalado y configurado.

### Endpoints

| Método | Ruta                        | Descripción                                      | Parámetros             |
|--------|-----------------------------|--------------------------------------------------|------------------------|
| GET    | `/api/users`                | Obtiene la lista de todos los usuarios.          | N/A                    |
| GET    | `/api/users/create-user`     | Muestra el formulario para crear un nuevo usuario| N/A                    |
| POST   | `/api/users`                | Crea un nuevo usuario en la base de datos.       | `id`, `email`, `phone_number` (en el cuerpo de la solicitud) |
| GET    | `/api/users/:id`            | Obtiene un usuario específico por su ID.         | `id` en la URL         |
| PUT    | `/api/users/:id`            | Actualiza los datos de un usuario específico.    | `id` en la URL, `email`, `phone_number` (en el cuerpo de la solicitud) |
| DELETE | `/api/users/:id`            | Elimina un usuario específico por su ID.         | `id` en la URL         |

### Clonar el repositorio

```bash
git clone https://github.com/tu_usuario/user-management-system.git
cd user-management-system


