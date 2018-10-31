const bucket = "./bucket/";
const avatarBucket = "./bucket/avatar/";
const documentBucket = "./bucket/documents";

const fs = require('fs');

const allowedTypes = ["image/jpg", "image/jpeg", "image/pjpeg", "image/gif", "image/png"];
const avatarTypes = ["image/svg+xml", "image/png", "image/vnd.adobe.photoshop",
"application/psd", "image/psd", "application/photoshop", "application/postscript"];
const documentTypes = ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
"text/plain", "	application/pdf"];

var uploadFile = (req, res) => {
    // res.send(req.files.doc.name);
    if(allowedTypes.indexOf(req.files.doc.mimetype) > -1) {
        req.files.doc.mv(bucket + req.files.doc.name, (err) => {
            if(err) {
                return res.status(500).send("Could Not Upload File: " + err);
            } else {
                return res.status(200).send("File Uploaded");
            }
        });

    } else {
        return res.status(400).send("File Type Not Allowed");
    }
}

// for Text Files

var uploadDocument = (req, res) => {
    if (documentTypes.indexOf(req.files.txt.mimetype) > -1) {
        req.files.txt.mv(documentBucket+req.files.txt.name, (err) => {
            if(err) {
                return res.status(500).send('Could not upload file: ' + err);
            } else {
                return res.status(200).send('OK');
            }
        });
    } else {
        return res.status(400).send('File type not allowed');
    }
}

// for avatar files

var uploadAvatar = (req, res) => {
    if (avatarTypes.indexOf(req.files.doc.mimetype) > -1) {
        req.files.doc.mv(avatarBucket+req.files.doc.name, (err) => {
            if(err) {
                return res.status(500).send('Could not upload file: ' + err);
            } else {
                return res.status(200).send('OK');
            }
        });
    } else {
        return res.status(400).send('File type not allowed');
    }
}


module.exports = {
    uploadFile,
    allowedTypes,
    uploadDocument,
    uploadAvatar
}