const express = require('express');
const Ubicaciones = require('../models/Ubicaciones');
const router = new express.Router();
const auth = require('../middleware/auth');

router.post('/Ubicaciones',auth, async (req, res) => {
    try {
        const UbicacionesData = req.body; // Obtener datos del cuerpo de la solicitud
        const ubicaciones = await Ubicaciones.create(UbicacionesData); 

        res.status(201).send(ubicaciones); // Enviar la respuesta con los datos guardados
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(400).send(error); // Devolver el error en la respuesta
    }
});
// Ruta para obtener todas las Ubicacioness
router.get('/Ubicaciones', auth,async (req, res) => {
    try {
        // Obtener todos los productos de la base de datos
        const ubicaciones = await Ubicaciones.find();
        res.send(ubicaciones); // Devolver los productos en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al obtener la Ubicacioness'); // Devolver un mensaje de error en la respuesta
    }
});

// Ruta para buscar  por su ID
router.get('/Ubicaciones/:id', auth,  async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar y eliminar el producto por su ID
        const ubicaciones = await Ubicaciones.findById(id);
        if (!ubicaciones) {
            return res.status(404).send('Ubicaciones no encontrado');
        }

       return  res.status(201).send(ubicaciones); // Devolver el c eliminado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al encontrar Ubicaciones'); // Devolver un mensaje de error en la respuesta
    }
});


// Ruta para eliminar un producto por su ID
router.delete('/Ubicaciones/:id', auth,async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar y eliminar el producto por su ID
        const Ubicaciones = await Ubicaciones.findByIdAndDelete(id);
        if (!Ubicaciones) {
            return res.status(404).send('Ubicaciones no encontrado');
        }

        res.send(Ubicaciones); // Devolver el c eliminado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al eliminar Ubicaciones'); // Devolver un mensaje de error en la respuesta
    }
});

// Ruta para actualizar un producto por su ID
router.put('/Ubicaciones/:id', auth,async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        // Buscar y actualizar el producto por su ID
        const ubicaciones = await Ubicaciones.findByIdAndUpdate(id, updates, { new: true });

        if (!ubicaciones) {
            return res.status(404).send('Ubicaciones  no encontrado');
        }

        return  res.status(201).send(ubicaciones); // Devolver el producto actualizado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al actualizar la Ubicaciones'); // Devolver un mensaje de error en la respuesta
    }
});
module.exports = router;