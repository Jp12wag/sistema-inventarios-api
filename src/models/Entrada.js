const mongoose = require('mongoose');

const EntradaStockSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productos',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
     ubicacion: {
        type: String    ,
        require: false,
        ref: 'Ubicaciones'
    }
});

const EntradaStock = mongoose.model('EntradaStock', EntradaStockSchema);

module.exports = EntradaStock;