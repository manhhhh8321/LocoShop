var express = require('express');
var router = express.Router();

const blog_controller = require('../controllers/blog')

router.get('/', blog_controller.show);
module.exports = router;