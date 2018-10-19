var mongoose = require("mongoose");

var cvs = mongoose.model(
    'cvs', 
    new mongoose.Schema({
        "first_name": String,
        "last_name": String,
        "birth_date": Date,
        "email": String,
        "phone": String,
        "current_residence": {
            "country": String,
            "city": String,
            "zip_code": Number
        },
        "education": [
            {
             "school_name": String,
             "level": String,
             "degree": String,
             "start_at": Date,
             "finish_at": Date
            }  
        ],      
        "work_experience": [
            {
                "position": String,
                "job_description": String,
                "tags": [String],
                "company": String,
                "start_at": Date,
                "finish_at": Date
            }
        ]  
       
   })
);

// GET Method for All the CV's

var getAllCVs = (cb) => {
    cvs.find({}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// GET Mehod to look up by ID

var getCVById = (id, cb) => {
    cvs.getCVById(id, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// POST Method to create new CV

var addCV = (data, cb) => {
    var cvs = new cvs(data);
    cvs.save((err, data) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}

// DELETE Method to delete by ID

var deleteById = (id, cb) => {
    cvs.deleteOne({_id: id}, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}

// PUT Method to update CV by ID

var updateCV = (id, data, cb) => {
    cvs.updateCV({_id: id}, data, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}

module.exports = {
    getAllCVs,
    getCVById,
    addCV,
    deleteById,
    updateCV
}
