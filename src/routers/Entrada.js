const express = require('express');
const Entradas = require('../models/Entrada');
const auth = require('../middleware/auth');
const router = new express.Router();

// Crear una nueva entrada de stock
router.post('/entradas', auth, async (req, res) => {
  
    const entrada = new Entradas({
        ...req.body,
        owner: req.user._id
    })
   
    try {
        await entrada .save();

        res.status(201).send(entrada ); // Enviar la respuesta con los datos guardados
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(400).send(error); // Devolver el error en la respuesta
    }
});

// Obtener todas las entradas de stock
router.get('/entradas', auth, async (req, res) => {
    try {
        const entradas = await Entradas.find();
        res.send(entradas);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las entradas de stock');
    }
});

// Obtener todas las entradas de stock
router.get('/entradas', auth, async (req, res) => {
    try {
        const entradaExistente = await EntradaStock.findOne({ producto: productoId });
        res.send(entradaExistente);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las entradas de stock');
    }
});

// Obtener todas las entradas de stock
router.get('/entradas/:id', auth, async (req, res) => {
    try {
        const entradas = await Entradas.find();
        res.send(entradas);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las entradas de stock');
    }
});
module.exports = router;