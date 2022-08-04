
const Product = require('../models/product')
const Blog = require('../models/blog');

const index = async function(req, res) {
    const product = await Product.find({});
    const blog = await Blog.find({});
    res.render('index', {product, blog})
}

module.exports = {index};