var mongoose = require("mongoose");

var jobSeekers = mongoose.model(
    "jobSeekers",
    new mongoose.Schema ({
        "firstname" : String, 
        "lastname" : String, 
        "email" : String, 
        "password": String,
        "role": String,
        "location" : {
            "country" : String, 
            "city" : String, 
            "municipality" : String
        }
    })
);

// Get all users / job seekers

var getAllJobSeekers = (name, cb) => {
    jobSeekers.find({}, {password: -1}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// Get user / job seeker by first name

var getJobSeekerByFirstName = (name, cb) => {
    jobSeekers.find({firstname: name}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
}

// Get user / job seeker by email.. will need to create an extra route in index.js

var getJobSeekerByEmail = (email, cb) => {
    jobSeekers.findOne({email: email}, {password: 1, role: 1, firstname: 1, lastname: 1, email: 1}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};


// Get user / job seeker by ID

var getJobSeekerById = (id, cb) => {
    jobSeekers.findById(id, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// Post (create) user / job seeker

var createJobSeeker = (seekerData, cb) => {
    var seeker = new jobSeekers(seekerData);
    seeker.save((err, data) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

// Delete user / job seeker by ID

var deleJobSeekerById = (id, cb) => {
    jobSeekers.deleteOne({_id: id}, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

// Put / update user / job seeker by ID

var updateJobSeekerById = (id, data, cb) => {
    jobSeekers.updateOne({_id, id}, data, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};


module.exports = {
    getAllJobSeekers,
    getJobSeekerByFirstName,
    getJobSeekerByEmail,
    getJobSeekerById,
    createJobSeeker,
    deleJobSeekerById,
    updateJobSeekerById
};