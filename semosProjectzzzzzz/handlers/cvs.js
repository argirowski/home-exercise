var cvs = require("../models/cvs");
var bcrypt = require("bcryptjs") //if only bcrypt is installed, delete the -js at the end
var utils = require("../utils");
let validator = require("fastest-validator");

// GET Method for All the CV's

var getAllCVs = (req, res) => {
      cvs.getAllCVs((err, data) => {
        console.log(err);
        if(err){
            res.status(500).send("Server Error. " + err);
        } else {
            res.send(data);
        }
    });
};

// GET Mehod to look up by ID

var getCVById = (req, res) => {
    var id = req.params.id;
    cvs.getCVById(id, (err, data) => {
        if(err){
            res.status(404).send("Cannot find CV !!!!");
        } else {
            res.send(data);
        }
    });
}

// POST Method to create new CV

var createCV = (req, res) => {

    var schema = {
        first_name: {type: "string", empty: false},
        last_name: {type: "string", empty: false},
        birth_date: {type: "date", empty: false},
        email: {type: "email", empty: false},
        phone: {type: "string", empty: false},
        current_residence: {type: "object", props: {
            country: {type: "string", empty: false},
            city: {type: "string", empty: false},
            zip_code: {type: "number", positive: true, integer: true, empty: false}
        }},
        education: {type: "array", items: {
            type: "object",
            props: {
                school_name: {type: "string", empty: false},
                level: {type: "string", empty: false},
                degree: {type: "string", empty: false},
                start_at: {type: "date", empty: false},
                finish_at: {type: "date", empty: false}
            }
        }},
        work_experience: {type: "array", items: {
            type: "object",
            props: {
                position: {type: "string", empty: false},
                job_description: {type: "string", empty: false},
                tags: {
                    type: "array",
                    items: {type: "string"}
                },
                company: {type: "string", empty: false},
                start_at: {type: "date", empty: false},
                finish_at: {type: "date", empty: false}
            }
        }}
    }

    let v = new validator();
    var valid = v.validate(req.body, schema);

    if(valid === true) {
        cvs.getCVById(req.body.email, (err, data) => {
            if(err) {
                return res.send(err);
            } else {
                var cvData = formatDates(req.body);
                cvs.addCV(cvData, (err) => {
                    if(err){
                        return res.status(500).send(err);
                    } else {
                        return res.send("OK");
                    }
                });
            }
            }
        )};
    }  


// DELETE Method to delete by ID

var deleteCVById = (req, res) => {
    var id = req.params.id;
    cvs.deleteCVById(id, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("OK.");
        }
    });
}

// PUT Method to update CV by ID

var updateCVById = (req, res) => {
    var cvData = formatDates(req.body);
    var id = req.params.id;
    cvs.updateCV(id, cvData, (err) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send("OK");
        }
    });
}

// FORMAT DATES CALLBACK

var formatDates = (cvData) => {
    if(cvData.birth_date != undefined && cvData.birth_date != null){
        cvData.birth_date = new Date(cvData.birth_date);
    }
    if(cvData.education != undefined && cvData.education != null){
        for(var i = 0; i < cvData.education.length; i++){
            if(cvData.education[i].start_at != undefined && cvData.education[i].start_at != null){
                cvData.education[i].start_at = new Date(cvData.education[i].start_at);
            }
            if(cvData.education[i].finish_at != undefined && cvData.education[i].finish_at != null){
                cvData.education[i].finish_at = new Date(cvData.education[i].finish_at);
            }
        }
    }
    if(cvData.work_experience != undefined && cvData.work_experience != null){
        for(var i = 0; i < cvData.work_experience.length; i++){
            if(cvData.work_experience[i].start_at != undefined && cvData.work_experience[i].start_at != null){
                cvData.work_experience[i].start_at = new Date(cvData.work_experience[i].start_at);
            }
            if(cvData.work_experience[i].finish_at != undefined && cvData.work_experience[i].finish_at != null){
                cvData.work_experience[i].finish_at = new Date(cvData.work_experience[i].finish_at);
            }
        }
    }
    return cvData;
}

module.exports = {
    getAllCVs,
    getCVById,
    createCV,
    deleteCVById,
    updateCVById
};
