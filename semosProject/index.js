var express = require("express");
var authentication = require("./separate/authentication");
var home = require("./separate/home");

var app = express();

app.get('/', home);

app.post('/signIn', authentication.signIn);
app.get('/signOut', authentication.signOut);
app.post('/signUp', authentication.signUp);


app.listen(8008);