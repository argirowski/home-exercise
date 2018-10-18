var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("express-jwt");

var mongo = require("./db/mongo");

var authentication = require("./handlers/authentication");
var root = require("./handlers/root");
var jobSeekers = require("./handlers/jobSeekers");
var cv = require('./handlers/cvs');
var companies = require("./handlers/companies");

mongo.Init();

var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(jwt({
    secret: "argirowski_project"
}).unless({
    path: [
        { url: '/login', methods: ['POST'] },
        { url: '/jobseekers', methods: ['POST'] }
    ]
})
);
// Root, login and logout routes

app.get("/", root);

app.post("/login", authentication.login);
app.get("/logout", authentication.logout);

// Job Seekers routes

app.get("/jobseekers", jobSeekers.getAllJobSeekers);
app.get("/jobseekers/name/:name", jobSeekers.getJobSeekerByFirstName);
app.get("jobseekers/:id", jobSeekers.getJobSeekerById);
app.post("/jobseekers", jobSeekers.createJobSeeker);
// app.delete("/jobseekers/:id", jobSeekers.deleJobSeekerById);
app.put("/jobseekers/:id", jobSeekers.updateJobSeekerById);

// CV routes

app.post('/cv', cv.createCV);
app.put('/cv/:id', cv.updateCVById);
app.delete('/cv/:id', cv.deleteCVById);
app.get('/cv', cv.getAllCVs);
app.get('/cv/:id', cv.getCVById);

// Companies Routes

app.get("/companies", companies.getAllCompanies);
app.get("/companies/name/: name", companies.getCompanyByName);
app.get("/companies/sector/: sector", companies.getCompanyBySector);
app.post("/companies", companies.addCompany);
app.delete("/companies/:id", companies.deleteCompanyById);
app.put("/companies/:id", companies.updateCompanyById);

// Token Function

app.use(function(err, req, res, next) {
    if(err.name === "UnauthorisedError") {
        res.send("Invalid Token");
    }
});

app.listen(80);



