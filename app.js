const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const port = process.env.SERVER_PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { name: 'World' });
});

require("./src/routes/user.routes.js")(app);


app.listen(port, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
  } else {
    console.log(`Example app listening on port ${port}`);
  }
});
