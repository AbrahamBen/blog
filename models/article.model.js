const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    tile: String,
    content : String,
    category: String,
    image: String,
    publishedAt: Date
});

module.exports = mongoose.model('Article',articleSchema);
