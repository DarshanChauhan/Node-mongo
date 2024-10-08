const dbConfig = require("../config/config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.connect = () => {
  return mongoose
    .connect(db.url)
    .then(() => {
      console.log("Connected to the MongoDB database! ✅");
    })
    .catch((err) => {
      console.error("Error :::", err.message || err);
      process.exit();
    });
};

mongoose.set("debug", true);
module.exports = db;
