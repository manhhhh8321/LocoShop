var express = require('express');
const Product = require('../models/product');
const Blog = require('../models/blog')
var router = express.Router();

;const array = [0,1,2,3]



router.get('/', async (req, res, next) => {
    const prs = await Product.find({});
    const blog = await Blog.find({});
    const cate = prs[0].categories[0];
    let arr = [];
    for(let i=0; i<prs.length; i++) {
        arr[i]=prs[i].categories[0];
    }
    
    const backToArray = Array.from(new Set(arr.toString().split(',')));
    res.render('shop', {prs, blog, backToArray});
})

module.exports = router;