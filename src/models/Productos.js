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
    fechaE: {
        type: Date,
        require: false,
      
    },
    
    fechaUpdate: {
        type: Date,
        require: false,
      
    },
    fechaS: {
        type: Date,
        require: false,
      
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'productos'
    },
    ubicacion:{
        type: String,
        require: false,
    }
});

const Productos = mongoose.model('Productos', ProductosSchema);

module.exports = Productos;