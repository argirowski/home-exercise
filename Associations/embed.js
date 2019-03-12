var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// Post Model => title, content

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

// User Model => email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// Create new user

// var newUser = new User ({
//     email: "second.user@gmail.com",
//     name: "El Segundo Usero",

// });

// newUser.posts.push({
//     title: "how to be an user no.2",
//     content: "never be segundo...always be primero"
// });

// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// Create new post

// var newPost = new Post({
//   title: "How working at 4am i good for you",
//   content: "A dissertation on workaholism... a brief history"
// });

// newPost.save(function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({ name: "El Segundo Usero" }, function(err, user) {
  if (err) {
    // console.log(err);
  } else {
    user.posts.push({
      title: "added another post as test",
      content: "working on my callback functions... sweet"
    });
    user.save(function(err, userAgain) {
      if (err) {
        console.log(err);
      } else {
        console.log(userAgain);
      }
    });
  }
});
