const express = require('express');
const Productos = require('../models/Productos');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/productos', auth ,async (req, res) => {
    const productoData = new Productos({
        ...req.body,
        owner: req.user._id
    })
   
    try {
        await productoData.save();

        res.status(201).send(productoData); // Enviar la respuesta con los datos guardados
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(400).send(error); // Devolver el error en la respuesta
    }
});
// Ruta para obtener todos los productos
router.get('/productos', auth ,  async (req, res) => {

  

    try {
        // Obtener todos los productos de la base de datos
       
     productos = await Productos.find();
            res.send(productos); // Devolver los productos en la respuesta
      
        
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al obtener los productos'); // Devolver un mensaje de error en la respuesta
    }
});

// Ruta para obtener un producto por su ID
router.get('/productos/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        // Buscar el producto por ID
        const producto = await Productos.findById(id);
        
        if (!producto) {
            return res.status(404).send('Producto no encontrado'); // Producto no encontrado
        }

        res.send(producto); // Devolver el producto encontrado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al obtener el producto'); // Devolver un mensaje de error en la respuesta
    }
});




// Ruta para eliminar un producto por su ID
router.delete('/productos/:id', async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar y eliminar el producto por su ID
        const producto = await Productos.findByIdAndDelete(id);
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }

        res.send(producto); // Devolver el producto eliminado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al eliminar el producto'); // Devolver un mensaje de error en la respuesta
    }
});

// Ruta para actualizar un producto por su ID
router.put('/productos/:id', async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        // Buscar y actualizar el producto por su ID
        const producto = await Productos.findByIdAndUpdate(id, updates, { new: true });

        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }

     return res.status(201).send(producto); // Devolver el producto actualizado en la respuesta
    } catch (error) {
        console.error(error); // Imprimir cualquier error en la consola
        res.status(500).send('Error al actualizar el producto'); // Devolver un mensaje de error en la respuesta
    }
});
module.exports = router;