var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("express-jwt");
var fileUpload = require("express-fileupload");

var mongo = require("./db/mongo");

var authentication = require("./handlers/authentication");
var root = require("./handlers/root");
var jobSeekers = require("./handlers/jobSeekers");
var cv = require('./handlers/cvs');
var companies = require("./handlers/companies");
var upload = require("./handlers/upload");

mongo.Init();

var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(jwt({
        secret: "argirowski_project"
    }).unless({
        path: [
            { url: '/login', methods: ['POST'] },
            { url: '/jobseekers', methods: ['POST'] },
            {url: "/upload", methods: ["POST"]},
        ]
    })
);

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

// Root, login and logout routes

app.get("/", root);

app.post("/login", authentication.login);
app.get("/logout", authentication.logout);

// Job Seekers routes

app.get("/jobseekers", jobSeekers.getAllJobSeekers);
app.get("/jobseekers/name/:name", jobSeekers.getJobSeekerByFirstName);
app.get("jobseekers/:id", jobSeekers.getJobSeekerById);
app.post("/jobseekers", jobSeekers.createJobSeeker);
app.delete("/jobseekers/:id", jobSeekers.deleteJobSeekerById);
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

// Upload Route

app.post("/upload", upload.uploadFile);

// Token Function

app.use(function(err, req, res, next) {
    if(err.name === "UnauthorizedError") {
        res.send("Invalid Token");
    }
});

console.log('listening')
app.listen(8080);



