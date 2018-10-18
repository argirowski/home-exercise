var mongoose = require("mongoose");

var cvs = mongoose.model(
    'cvs', 
    new mongoose.Schema({
        "first_name": "",
        "last_name": "",
        "birth_date": "",
        "email": "",
        "phone": "",
        "current_residence": {
            "country": "",
            "city": "",
            "zip_code": ""
        },
        "education": [
            {
             "school_name": "",
             "level": "",
             "degree": "",
             "start_at": "",
             "finish_at": ""
            },      
            {
             "university_name": "",
             "level": "",
             "degree": "",
             "start_at": "",
             "finish_at": ""
            }
        ],       
       
   })
);

// GET Method for All the CV's

var get_all_cvs = (cb) => {
    cvs.find({}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// GET Method to look up by Name

var get_cv_by_name = (cvFirstName, cb) => {
    cvs.find({}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// GET Method to look up by Last Name

var get_cv_by_last_name = (cvLastName, cb) => {
    cvs.find({}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// GET Mehod to look up by ID

var get_cv_by_id = (id, cb) => {
    cvs.get_cv_by_id(id, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// POST Method to create new CV

var create_cv = (cvInfo, cb) => {
    var cv = new cvs(cvInfo);
    cvs.save((err, data) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}

// DELETE Method to delete by ID

var delete_cv_by_id = (id, cb) => {
    cvs.deleteOne({_id: id}, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}

// PUT Method to update CV by ID

var update_cv_by_id = (id, data, cb) => {
    cvs.updateOne({_id: id}, data, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
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
}
