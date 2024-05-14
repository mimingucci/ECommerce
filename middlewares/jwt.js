const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateAccessToken = (uid, role) =>
  jwt.sign({ id: uid, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
const generateRefreshToken = (uid) =>
  jwt.sign({ id: uid }, process.env.JWT_SECRET, { expiresIn: "30d" });

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};