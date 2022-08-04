const Blog = require('../models/blog')

const show = async function (req, res) {
    const blog = await Blog.find({});
    res.render('blog', { blog });

}

module.exports = {show};