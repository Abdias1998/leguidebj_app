require("dotenv").config({ path: "./config/.env" });
require("./config/bd");
const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const admin_route = require("./routes/admin/admin.routes");

const app = express();
const port = process.env.port;
const url = process.env.port;
app.use(cookieParser());
app.use(helmet());
app.use(cors({ credentials: true, origin: process.env.client_url }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get(["/"], function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.use("/v1/admin", admin_route);
app.listen(port, (req, res) => {
  console.log(`Le serveur est démarrer sur le port ${port}`);
});
