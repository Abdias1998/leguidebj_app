/* global process */
/* global __dirname */

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
const backend_url = process.env.backend_url;
// Définition des origines autorisées
const allowedOrigins = [process.env.client_url, backend_url];
app.use(cookieParser());
app.use(helmet());
app.use(cors({ credentials: true, origin: allowedOrigins }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get(["/"], function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});

app.use("/v1/admin", admin_route);
app.listen(port, () => {
  console.log(`Le serveur est démarrer sur le port ${port}`);
});
