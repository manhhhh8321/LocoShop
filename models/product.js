const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema ({
    title: String,
    description: String,
    price: Number,
    quantities: Number,
    hidden: Boolean,
    discount: {type: Number, default: 0},
    image: String,
    categories: Array,
    color: String,
    onsale: Number
})

module.exports = mongoose.model('Product', productSchema);