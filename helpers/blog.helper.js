const models = require('../models/queries');

const getAllPosts = async () => {
    const posts = await models.getAllPosts()
    return posts
}

module.exports = {
    getAllPosts
}