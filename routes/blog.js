var express = require('express');
var router = express.Router();

const Blog = require('../models/blog');

router.get('/', async function (req, res, next) {
    const blog = await Blog.find({});
    res.render('blog', {blog} );
});
module.exports = router;