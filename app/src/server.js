const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.set("port", 20003); //configuro el puerto de escucha

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes/test.routes.js"));

app.use(cors());

module.exports = app;
