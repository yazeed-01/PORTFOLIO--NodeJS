const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const contactMePost = new Schema({
namee: String,
email: String,
phone: Number,
message: String
});
const contactPost = mongoose.model('contactPost',contactMePost);
module.exports = contactPost;

