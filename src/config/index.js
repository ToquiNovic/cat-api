const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  DB_NAME: process.env.DB_NAME || "milu",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "sammy",
  DB_PASS: process.env.DB_PASS || "1234",
  URL_FROND: process.env.URL_FROND || "*",
};
