const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

const Categoria = mongoose.model('Categorias', CategoriaSchema);

module.exports = Categoria;