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
    img: {
      type: String,
      default:'',
    },
    username: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: false,
    },
    deployed: {
      type: String,
      required: false,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);