const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: String,
    description : String,
},{timestamps:true});

module.exports = mongoose.model('Category',categorySchema);
