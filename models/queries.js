const knex = require('./knex') // connection


module.exports = {
    getAllPosts(){
        return knex('blog-posts')
    }
}

