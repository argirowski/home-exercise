var cv = require("../models/cvs");

// GET Method for All the CV's

var get_all_cvs = (req, res) => {
    cvs.get_all_cvs((err, data) => {
        if(err){
            res.status(500).send("Server Error. " + err);
        } else {
            res.send(data);
        }
    });
};

// GET Method to look up by Name

var get_cv_by_name = (req, res) => {
    var cvFirstName = req.params.name;
    cvs.get_cv_by_name(cvFirstName, (err, data) => {
        if(err){
            res.status(500).send("Server Error. " + err);
        } else {
            res.send(data);
        }
    });
}

// GET Method to look up by Last Name

var get_cv_by_last_name = (req, res) => {
    var cvLastName = req.params.name;
    cvs.get_cv_by_last_name(cvLastName, (err, data) => {
        if(err){
            res.status(500).send("Server Error. " + err);
        } else {
            res.send(data);
        }
    });
}

// GET Mehod to look up by ID

var get_cv_by_id = (req, res) => {
    var id = req.params.id;
    cvs.get_cv_by_id(id, (err, data) => {
        if(err){
            res.status(404).send("Cannot find CV !!!!");
        } else {
            res.send(data);
        }
    });
}

// POST Method to create new CV

var create_cv = (req, res) => {
    cvs.create_cv(req.body, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.status(200).send("OK.");
        }
    });
}

// DELETE Method to delete by ID

var delete_cv_by_id = (req, res) => {
    var id = req.params.id;
    cv.delete_cv_by_id(id, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("OK.");
        }
    });
}

// PUT Method to update CV by ID

var update_cv_by_id = (req, res) => {
    var id = req.params.id;
    var cvData = req.body; //will need to check this later !!!
    cv.update_cv_by_id(id, cvData, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("OK.");
        }
    });
}

module.exports = {
    get_all_cvs,
    get_cv_by_name,
    get_cv_by_last_name,
    get_cv_by_id,
    create_cv,
    delete_cv_by_id,
    update_cv_by_id
};
