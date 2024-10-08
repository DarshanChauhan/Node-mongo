const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/models/index");

dotenv.config();

const app = express();
app.use(express.json());

db.connect();

const PORT = process.env.PORT || 7866;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
