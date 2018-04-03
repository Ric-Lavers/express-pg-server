const blogHelper = require('../helpers/blog.helper')
const responseHelper = require('../response.helper')

const getAllPosts = (req,res) => {
    blogHelper.getAllPosts(req.body)
    .then(blogPosts => responseHelper.send(null, blogPosts, res) )
    .catch(err => responseHelper.send(err, null, res))
}

module.exports = {
    getAllPosts
}