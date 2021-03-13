require('dotenv').config();

const { PORT } = process.env

const express = require("express");
const corsMw = require("./middleware/cors");

const app = express();
app.use(express.json());

app.options("*", corsMw);
app.use(corsMw);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));