const mongoose = require('mongoose');

const productScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mogonoose.model('Product', productSchema);