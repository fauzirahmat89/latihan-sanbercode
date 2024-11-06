var express = require("express");
var fileUpload = require("express-fileupload");
var cloudinary = require("./cloudinary.js");

var port = 3000;
var app = express();

// use middleware for grant access upload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Uplode file satuan
app.post("/upload", (req, res) => {
  const { photo } = req.files;

  if (!photo) {
    res.status(400).json({ status: 400, message: "Photo is required" });
  }

  cloudinary.v2.uploader.upload(
    photo.tempFilePath,
    {
      public_id: new Date().getTime(),
    },
    (error, result) => {
      if (error) {
        res.status(500).json({ status: 500, message: "upload failed", error });
      } else {
        res.json({ status: 200, message: "Success", result });
      }
    }
  );
});

function multiple(photo){
    return new Promise((resolve, reject)=>{
        cloudinary.v2.uploader.upload(
            photo.tempFilePath,
            {
              public_id: new Date().getTime(),
            },
            (error, result) => {
              if (error) {
                reject({ status: 500, message: "upload failed", error });
              } else {
                resolve({ status: 200, message: "Success", result });
              }
            }
          );
    })

}


//uplode file multiple
app.post("/upload/multiple",async (req, res) => {
    const { photo,photo2 } = req.files;
  
    if (!photo && !photo2) {
      res.status(400).json({ status: 400, message: "Photo or photo2 is required" });
    }

    try {
        // Collect all upload promises
        const results = await Promise.all([multiple(photo), multiple(photo2)]);
        res.json({ status: 200, message: "Success", results });
      } catch (error) {
        res.status(500).json(error);
      }
  });

// running apps
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});