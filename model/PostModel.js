const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      type: String,
    },
  ],
  // You can add more fields as needed, e.g., user information, comments, etc.
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;