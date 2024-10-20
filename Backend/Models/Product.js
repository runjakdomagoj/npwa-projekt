const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    alcoholPercentage: { type: Number },
    type: { type: String, required: true },
    manufacturer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Manufacturer', 
        required: true 
    }
});

module.exports = mongoose.model('Product', productSchema);
