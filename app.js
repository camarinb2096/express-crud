const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { name: 'World' });
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
  } else {
    console.log(`Example app listening on port ${port}`);
  }
});
