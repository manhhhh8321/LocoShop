var express = require('express');
var router = express.Router();

const Product = require('../models/product')
const Blog = require('../models/blog');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const product = await Product.find({});
  const blog = await Blog.find({});
  // console.log(product[0].discount-product[0].price);
  res.render('index', { product, blog });
});

module.exports = router;
