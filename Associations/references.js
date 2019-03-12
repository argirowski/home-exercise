var mongoose = require("mongoose");
var Post = require("./models/post");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/blog_demo_2");

// User.create({
//     email: "referenced.user@gmail.com",
//     name: "Mr. Referenced User"
// });

// Post.create({
//     title: " How to be a referenced user, a manual in 4 parts",
//     content: "lots of bacon and lorem ipsums"
// }, function(err, post) {
//     User.findOne({email: "referenced.user@gmail.com"}, function(err, foundUser) {
//         if(err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data) {
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     });
// });

// Find user and find all posts for that user

// User.findOne({ email: "referenced.user@gmail.com" })
//   .populate("posts")
//   .exec(function(err, user) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(user);
//     }
//   });
