const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    content: String,
    author: String,
    image: String
},
{
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema);