const express = require('express');
const Salidas = require('../models/Salida');
const auth = require('../middleware/auth');
const router = new express.Router();

// Crear una nueva salida de stock
router.post('/salidas', auth, async (req, res) => {
    const salida = new Salidas({
        ...req.body,
        owner: req.user._id
    });

    try {
        await salida.save();
        res.status(201).send(salida);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

// Obtener todas las salidas de stock
router.get('/', auth, async (req, res) => {
    try {
        const salidas = await Salidas.find();
        res.send(salidas);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las salidas de stock');
    }
});

// Obtener una salida de stock por su ID
router.get('/salidas/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const salida = await Salidas.findById(_id);
        if (!salida) {
            return res.status(404).send();
        }
        res.send(salida);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la salida de stock');
    }
});

router.get('/salidas', async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    const filtro = {};
   

    if (fechaInicio && fechaFin) {
        filtro.fecha = { $gte: new Date(fechaInicio), $lte: new Date(fechaFin) };
    }

    try {
       
        const salidas = await Salidas.find(filtro);
        res.status(200).json(salidas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las salidas de stock', detalle: error.message });
    }
});

module.exports = router;