const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  url: process.env.MONGODB_URL || 'mongodb://localhost:27017/darshan',
};
