var jwt = require('jsonwebtoken');
var jobSeekers = require('../models/jobSeekers');
var bcrypt = require("bcryptjs"); //if only bcrypt is installed, delete the -js at the end
let Validator = require("fastest-validator");

var login = (req, res) => {
    jobSeekers.getJobSeekerByEmail(req.body.email, (err, seekerData) => {

        var schema = {
            email: {type:"email", empty: false},
            password: {type:"string", min: 8, max: 16, empty: false}
        }
        let v = new validator();
        var valid = v.validate(req.body, schema);

        bcrypt.compare(req.body.password, seekerData.password)
        .then((valid) => {
            if(valid === true) {
                var ud = {
                    uid: seekerData._id,
                    email: seekerData.email,
                    name: seekerData.firstname + ' ' + seekerData.lastname,
                    role: seekerData.role
                };
                var token = jwt.sign(ud, "argirowski_project");
                return res.send(token);
            } else {
                return res.status(403).send("Unauthorized");
            }
        }).catch((err) => {
            return res.status(500).send("Internal server error");
        })
    });
};

var logout = (req, res) => {
    res.send(req.user);
};

module.exports = {
    login,
    logout
}