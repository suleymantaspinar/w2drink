require('dotenv').config();

const { PORT } = process.env

const express = require("express");
const corsMw = require("./middleware/cors");
const router = require("./routes");

const app = express();
app.use(express.json());

app.options("*", corsMw);
app.use(corsMw);
app.use("/api/v1",router)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));