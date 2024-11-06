const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dn0rz6gcl", // silahkan pakai menggunakan cloud name kalian
  api_key: "428142856791234", // silahkan pakai menggunakan api key kalian
  api_secret: "KNS1YYKCnZBFwBIBij-K70lSVQ8", // silahkan pakai menggunakan api secret kalian
});

module.exports = cloudinary;