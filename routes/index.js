var express = require('express');
var router = express.Router();

const homepage_controller = require('../controllers/homepage');


/* GET home page. */
router.get('/', homepage_controller.index);

module.exports = router;
