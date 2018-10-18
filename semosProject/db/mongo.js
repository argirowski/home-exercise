var mongoose = require("mongoose");

const options = {
    useNewUrlParser: true
}

var Init = () => {
   mongoose.connect("mongodb://127.0.0.1:27017/semos1", options)
   .then((conn) => {
       console.log("Semos Project Mongo DB Database Successful Connection");
   })
   .catch((err) => {
    console.log(err);
   });
};

module.exports = {
    Init
}