const mongoose = require('mongoose');

const ProveedoresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

const Proveedores = mongoose.model('Proveedores', ProveedoresSchema);

module.exports = Proveedores;