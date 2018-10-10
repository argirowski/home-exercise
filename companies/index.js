var express = require("express");
var bodyParser = require("body-parser");

var mongo = require("./db/mongo");

var authentication = require("./handlers/authentication");
var root = require("./handlers/root");
var companies = require("./handlers/companies");

mongo.Init();

var app = express();
app.use(bodyParser.json());

app.get("/", root);

app.get("/authentication", authentication.logout);
app.post("/authentication", authentication.login);

app.get("/companies", companies.getAllCompanies);
app.get("/companies/name/: name", companies.getCompanyByName);
app.get("/companies/sector/: sector", companies.getCompanyBySector);
app.post("/companies", companies.addCompany);
app.delete("/companies/:id", companies.deleteCompanyById);
app.put("/companies/:id", companies.updateCompanyById);

app.listen(8000);

