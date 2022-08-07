var express = require('express');
var router = express.Router();

const shop_controller = require('../controllers/product');



router.get('/product', shop_controller.allProductView);

module.exports = router;