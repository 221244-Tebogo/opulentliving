// models/Products.js
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,  // is this required or not?
    },
    description: {
        type: String,
        required: true
    },
   richDescription: {
    type: String,
    default: ''
   },
   image: {
    type: String,
    default: ''
   },
   images: []  // TYPE OF ARRAY
   ,
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInstock: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
   
});

module.exports = mongoose.model("Product", ProductSchema); //export file


