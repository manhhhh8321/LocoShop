var express = require('express');
var router = express.Router();
const Blog = require('../models/blog')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const blog = await Blog.find({});
  res.render('contact', {blog});
  
});

module.exports = router;
