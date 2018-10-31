var companies = require("../models/companies");

var getAllCompanies = (req, res) => {
    companies.getAllCompanies((err, data) => {
        if(err){
            res.status(500).send("Internal Error " + err);
        } else {
            res.send(data);
        }
    });
};

var getCompanyByName = (req, res) => {
    var name = req.params.name;
    companies.getCompanyByName(name, (err, data) => {
        if(err) {
            res.status(500).send("Internal Error " + err);
        } else {
            res.send(data);
        }
    });
};

var getCompanyBySector = (req, res) => {
    var sector = req.params.sector;
    companies.getCompanyBySector(sector, (err, data) => {
        if(err) {
            res.status(404).send("Sector Not Found")
        } else {
            res.send(data);
        }
    });
};

var addCompany = (req, res) => {
    companies.addCompany(req.body, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.status(200).send("OK !!!");
        }
    });
};

var deleteCompanyById = (req, res) => {
    var id = req.params.id;
    companies.deleteCompanyById(id, (err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("OK");
        }
    });
};

var updateCompanyById = (req, res) => {
    var id = id;
    var companyData = req.body;
    companies.updateCompanyById(id, companyData, (err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("OK");
        }
    });
};

module.exports = {
    getAllCompanies,
    getCompanyByName,
    getCompanyBySector,
    addCompany,
    deleteCompanyById,
    updateCompanyById
};
