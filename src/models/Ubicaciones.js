const mongoose = require('mongoose');

const UbciacionesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

const Ubicaciones = mongoose.model('Ubicaciones', UbciacionesSchema);

module.exports = Ubicaciones;