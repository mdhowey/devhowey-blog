const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default:'',
    },
    username: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);