const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Venta = new Schema({
    Local: {
        type: String
    },
    Art: {
        type: String
    },
    PrecB: {
        type: String
    },
    PrecL: {
        type: String
    },
    Tot: {
        type: String
    }
}, {
    collection: 'Venta'
});

module.exports = mongoose.model('Venta', Venta)