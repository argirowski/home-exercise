var mongoose = require("mongoose");

var Companies = mongoose.model(
    "companies",
    new mongoose.Schema({
        "company_name": String,
        "company_owner": String,
        "company_email": String,
        "company_phone": String,
        "company_size": Number,
        "company_sector": String,
        "company_residence": [
            {
            "country": String,
            "city": String,
            "zip_code": Number
        }
        ]
    })
);

var getAllCompanies = (cb) => {
    Companies.find({}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getCompanyBySector = (sector, cb) => {
    Companies.find({company_sector: sector}, (err, data) => { 
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    })
}

var getCompanyByName = (name, cb) => {
    Companies.find({company_name: name}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    })
}

var addCompany = (companyData, cb) => {
    var company = new Companies(companyData);
    company.save((err, data) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}

var deleteCompanyById = (id, cb) => {
    Companies.deleteOne({_id: id}, data, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    })
}

var updateCompanyById = (id, data, cb) => {
    Companies.updateOne({_id: id}, data, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}

module.exports = {
    getAllCompanies,
    getCompanyBySector,
    getCompanyByName,
    addCompany,
    deleteCompanyById,
    updateCompanyById
}
