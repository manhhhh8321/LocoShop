const Blog = require('../models/blog')

const blogView = async function (req, res) {
    const blog = await Blog.find({});
    res.render('blog', { blog });

}

module.exports = {blogView};