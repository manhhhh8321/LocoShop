var express = require('express');
var router = express.Router();

const shop_controller = require('../controllers/shop');



router.get('/shop', shop_controller.allProductView);

module.exports = router;