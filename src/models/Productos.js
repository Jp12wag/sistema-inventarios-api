const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoría: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    },
    stockInicial: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'productos'
    }
});

const Productos = mongoose.model('Productos', ProductosSchema);

module.exports = Productos;