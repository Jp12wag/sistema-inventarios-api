const express = require('express');
const Proveedores = require('../models/Proveedores');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/proveedores', auth, async (req, res) => {
    try {
        const proveedoresData = req.body; // Obtener datos del cuerpo de la solicitud
        const proveedor = await Proveedores.create(proveedoresData); 

        res.status(201).send(proveedor); // Enviar la respuesta con los datos guardados
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(400).send(error); // Devolver el error en la respuesta
    }
});
// Ruta para obtener todas las categorias
router.get('/proveedores', auth , async (req, res) => {
    try {
        // Obtener todos los productos de la base de datos
        const proveedor = await Proveedores.find();
        res.send(proveedor); // Devolver los productos en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al obtener los proveedores'); // Devolver un mensaje de error en la respuesta
    }
});



// Ruta para eliminar un proveedores por su ID
    router.delete('/proveedores/:id', auth, async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar y eliminar el producto por su ID
        const proveedor = await Proveedores.findByIdAndDelete(id);
        if (!proveedor) {
            return res.status(404).send('proveedor no encontrado');
        }

        res.send(proveedor); // Devolver el c eliminado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al eliminar proveedor'); // Devolver un mensaje de error en la respuesta
    }
});

// Ruta para actualizar un producto por su ID
router.put('/proveedores/:id', auth ,async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        // Buscar y actualizar el producto por su ID
        const proveedor = await Proveedores.findByIdAndUpdate(id, updates, { new: true });

        if (!proveedor) {
            return res.status(404).send('Proveedor  no encontrado');
        }

        return res.status(201).send(proveedor); // Devolver los proveedores actualizado 
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al actualizar la Proveedores'); // Devolver un mensaje de error en la respuesta
    }
});
module.exports = router;