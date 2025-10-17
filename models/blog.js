const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String, 
    required: true
  },
  category: {
    type: String,
    default: 'General'
  },
  
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
