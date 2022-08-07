
const Product = require('../models/product')
const Blog = require('../models/blog');

const homepageView = async function (req, res, next) {
    const product = await Product.find({});
    const blog = await Blog.find({});
    res.render('index', { product, blog })
}

module.exports = { homepageView };