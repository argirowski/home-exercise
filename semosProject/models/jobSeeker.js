var mongoose = require("mongoose");

// Define the Database Scema

var jobSeekers = mongoose.model (
    "jobSeekers",
    new.mongoose.Scema ({
        "first_name": String,
        "last_name": String,
        "birth_date": Number,
        "phone": Number,
        "current_residence": {
            "country": String,
            "city": String,
            "zip_code": Number
        },
        "education": {
            "school_name": String,
            "level": String,
            "degree": String,
            "start_at": Number,
            "finish_at": Number
        }
    })
);

// Find all job seekers callback function

var getAlljobSeekers = (cb) => {
    jobSeekers.find({}, (err, data) => {
        if(err) {
            return cb (err,null);
        } else {
            return cb (null,data);
        }
    });
};

// Get job seeker by first name callback function

var getjobSeekerByName = (name, cb) => {
    jobSeekers.find({first_name: name}, (err, data) => {
        if(err) {
            return cb (err,null);
        } else {
            return cb (null, data);
        }
    });
};

// Get job seeker by last name callback function

var getjobSeekerByLastName = (lastName, cb) => {
    jobSeekers.find({last_name: lastName}, (err, data) => {
        if(err) {
            return cb (err, null);
        } else {
            return cb (null, data);
        }
    });
};

module.exports = {
    getAlljobSeekers,
    getjobSeekerByName,
    getjobSeekerByLastName
}







