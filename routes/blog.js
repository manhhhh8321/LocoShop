var express = require('express');
var router = express.Router();

const blog_controller = require('../controllers/blog')

router.get('/blog', blog_controller.blogView);
module.exports = router;