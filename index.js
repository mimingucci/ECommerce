const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const initRoutes = require("./routes");
require("dotenv").config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 1905;
db();
initRoutes(app);

app.listen(PORT, () => {
  console.log("Hello NodeJS");
});
