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
    }
});

const EntradaStock = mongoose.model('EntradaStock', EntradaStockSchema);

module.exports = EntradaStock;