const mongoose = require('mongoose');

const SalidaStockSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productos',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    ubicación:{
        type:String,
        ref: 'ubicaciones',
        required: true
    },
    cliente:{
        type: String,
        required: true
    },
    comentarios:{
        type: String,
        required: true
    },
    precioDeVenta:{
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

const SalidaStock = mongoose.model('SalidaStock', SalidaStockSchema);

module.exports = SalidaStock;