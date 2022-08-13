var express = require('express');
var router = express.Router();

const product_controller = require('../controllers/product');



router.get('/product', product_controller.allProductView);
router.get('/product/:id', product_controller.productDetail);

module.exports = router;