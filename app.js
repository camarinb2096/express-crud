const express = require('express');
require('dotenv').config(); // Cargar variables de entorno

const app = express();

// Proporcionar un puerto por defecto si la variable de entorno no está definida
const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
  } else {
    console.log(`Example app listening on port ${port}`);
  }
});
