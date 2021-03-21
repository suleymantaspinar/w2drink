require('dotenv').config();
const cors = require("cors");
const { CORS_ALLOWED_ORIGINS } = process.env

const whitelist = new Set(CORS_ALLOWED_ORIGINS.split(';'));

const corsOptions = {
  optionsSuccessStatus: 200,
  origin: function(origin, callback) {
    if (whitelist.has(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

module.exports = cors(corsOptions);