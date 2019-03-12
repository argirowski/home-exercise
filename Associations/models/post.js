var mongoose = require("mongoose");

// Post Model => title, content

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

//   var Post = mongoose.model("Post", postSchema);

module.exports = mongoose.model("Post", postSchema);

//   module.exports = Post; can also be like this
