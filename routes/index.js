var express = require('express');
var router = express.Router();

const Product = require('../models/product')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const product = await Product.find({});
  // console.log(product[0].discount-product[0].price);
  res.render('index', { product });
});

module.exports = router;
