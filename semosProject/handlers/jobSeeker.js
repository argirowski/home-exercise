var jobSeekers = require("../models/jobSeeker");

// Find all job seekers callback function

var getAllJobSeekers = (req, res) => {
    users.getAlljobSeekers ((err, data) => {
        if(err) {
            res.status(500).send("Server Error" + err);
        } else {
            res.send(data);
        }
    });
};

// Get job seeker by first name callback function

var getjobSeekerByName = (req, res) => {
    var jobSeekerName = req.params.jobSeekerName;
    jobSeekers.getjobSeekerByName(jobSeekerName, (err, data) => {
        if(err) {
            res.status(500).send("Server Error" + err);
        } else {
            res.send(data);
        }
    });
};

// Get job seeker by last name callback function

var getjobSeekerByLastName = (req, res) {
    
}

