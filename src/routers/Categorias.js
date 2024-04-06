const express = require('express');
const Categoria = require('../models/Categorias');
const router = new express.Router();
const auth = require('../middleware/auth');

router.post('/categorias',auth, async (req, res) => {
    try {
        const categoriaData = req.body; // Obtener datos del cuerpo de la solicitud
        const categoria = await Categoria.create(categoriaData); 

        res.status(201).send(categoria); // Enviar la respuesta con los datos guardados
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(400).send(error); // Devolver el error en la respuesta
    }
});
// Ruta para obtener todas las categorias
router.get('/categorias', auth,async (req, res) => {
    try {
        // Obtener todos los productos de la base de datos
        const categoria = await Categoria.find();
        res.send(categoria); // Devolver los productos en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al obtener la categorias'); // Devolver un mensaje de error en la respuesta
    }
});

// Ruta para buscar  por su ID
router.get('/categorias/:id', auth,  async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar y eliminar el producto por su ID
        const categoria = await Categoria.findById(id);
        if (!categoria) {
            return res.status(404).send('categoria no encontrado');
        }

        res.send(categoria); // Devolver el c eliminado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al encontrar categoria'); // Devolver un mensaje de error en la respuesta
    }
});


// Ruta para eliminar un producto por su ID
router.delete('/categorias/:id', auth,async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar y eliminar el producto por su ID
        const categoria = await Categoria.findByIdAndDelete(id);
        if (!categoria) {
            return res.status(404).send('categoria no encontrado');
        }

        res.send(categoria); // Devolver el c eliminado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al eliminar categoria'); // Devolver un mensaje de error en la respuesta
    }
});

// Ruta para actualizar un producto por su ID
router.put('/categorias/:id', auth,async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        // Buscar y actualizar el producto por su ID
        const categoria = await Categoria.findByIdAndUpdate(id, updates, { new: true });

        if (!categoria) {
            return res.status(404).send('Categoria  no encontrado');
        }

        res.send(categoria); // Devolver el producto actualizado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al actualizar la categoria'); // Devolver un mensaje de error en la respuesta
    }
});
module.exports = router;