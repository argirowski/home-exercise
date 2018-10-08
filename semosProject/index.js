var express = require("express");
var bodyParser = require("body-parser");

var mongo = require("./db/mongo");
var root = require("./handlers/root");
var authentication = require('./handlers/authentication');
var cvs = require("./handlers/cvs");

mongo.Init();

var app = express();
app.use(bodyParser.json());

app.get('/', root);
app.post('/login', authentication.login);
app.get('/logout', authentication.logout);

app.get('/cv', cvs.get_all_cvs);
app.get('/cv/:name', cvs.get_cv_by_name);
app.get('/cv/:last_name', cvs.get_cv_by_last_name);
app.get('/cv/:id', cvs.get_cv_by_id);
app.post('/cv', cvs.create_cv);
app.delete('/cv/:id', cvs.delete_cv_by_id);
app.put('/cv/:id', cvs.update_cv_by_id);

app.listen(8008);
