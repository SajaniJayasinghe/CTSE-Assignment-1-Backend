const mongoose = require("mongoose");
const BlogsSchema = mongoose.Schema({

  type: [
    {
      type: String,
      required: true,
    },
  ],

  blogName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
    required: false,
  },

  date: {
    type: String,
    required: false,
  },
});

// const Blogs = mongoose.model("blogs", BlogsSchema);
// module.exports = Blogs
module.exports = mongoose.model("blogs", BlogsSchema);
