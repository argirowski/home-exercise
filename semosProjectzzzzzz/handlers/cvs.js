var cvs = require("../models/cvs");
let Validator = require("fastest-validator");

// GET Method for All the CV's

var getAllCVs = (req, res) => {
    console.log('test 1');
    cvs.getAllCVs((err, data) => {
        console.log('test 2');
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
        first_name: { type: 'string', empty: false },
        last_name: { type: 'string', empty: false },
        birth_date: { type: "date", empty: false },
        email: { type: "email", empty: false },
        phone: { type: "string", empty: false },
        current_residence: {
            type: "array", items: {
                type: "object", props: {
                    country: { type: "String", empty: false },
                    city: { type: "String", empty: false },
                    zip_code: { type: "number", empty: false}
                }
            }
        },
        education: {
            type: "array", items: {
                type: "object", props {
                    
                }
            }
        }
    }

    var cvData = formatDates(req.body);
    cvs.addCV(cvData, (err) => {
        if(err){
            return res.status(500).send(err);
        } else {
            return res.send("OK");
        }
    });
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
