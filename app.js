const express = require('express');
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("./corsConfig");

const DB_URL = "mongodb://localhost:27017/local";
mongoose.connect(DB_URL, {useNewUrlParser: true})
    .then(() => console.log("Mongo connection OK"))
    .catch(err => console.error("Mongo connection FAIL: " + err));

app.use(cors);
app.use(express.json());
app.use(router);

module.exports = app;