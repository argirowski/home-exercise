const bucket = "./bucket/";
const allowedTypes = ["image/jpg", "image/jpeg", "image/pjpeg", "image/gif", "image/png"];

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



module.exports = {
    uploadFile,
    allowedTypes
}