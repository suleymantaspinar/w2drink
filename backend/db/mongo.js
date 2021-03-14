require('dotenv').config();
const mongoose = require('mongoose');

const {
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_DATABASE
} = process.env

const OPTIONS =  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const URL = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`

mongoose.connect(URL, OPTIONS );

mongoose.connection.on('connected', function () {
    console.info(`Mongoose ${URL} connected on port ${MONGODB_PORT}`);
});
  
mongoose.connection.on('error',function (err) {
    console.error(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', function () {
    console.warn('Mongoose default connection disconnected');
});
  
module.exports = { mongoose }
