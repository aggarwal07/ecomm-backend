const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;