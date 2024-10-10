const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de usuarios');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Usuario con ID: ${userId}`);
});

router.post('/', (req, res) => {
    res.send('Crear un nuevo usuario');
});

module.exports = router;
