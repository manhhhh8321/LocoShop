const Product = require('../models/product');
const Blog = require('../models/blog');

const allProductView = async function (req, res, next) {
    const prs = await Product.find({});
    const blog = await Blog.find({});
    const cate = prs[0].categories[0];
    let arr = [];
    for (let i = 0; i < prs.length; i++) {
        arr[i] = prs[i].categories[0];
    }

    const backToArray = Array.from(new Set(arr.toString().split(',')));
    res.render('product', { prs, blog, backToArray });
}

const productDetail = async function (req, res, next) {
    let pid = req.params.id;
    const pr = await Product.findOne({ _id: pid });
    if (!pr) {
        res.status(404).send('Product not found');
    }
    res.render('product_detail', { pr });
}

module.exports = { allProductView, productDetail };