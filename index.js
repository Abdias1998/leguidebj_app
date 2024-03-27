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
const users_route = require("./routes/users/users.routes");
const destination_route = require("./routes/destination/destination.routes");
const fs = require('fs')
const app = express();
const port = process.env.port;
const client_url = process.env.client_url;

// Définition des origines autorisées
// const allowedOrigins = [process.env.client_url, backend_url];
app.use(cookieParser());
app.use(helmet());
app.use(cors({ credentials: true, origin: client_url}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get(["/"], function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});
app.use(
  express.static(path.join(__dirname, "./images/guide"))
);

app.get("/images/guide/:filename", (req, res) => {
  const filename = req.params.filename;
  // Récupérer le chemin complet de l'image
  const imagePath = path.join(
    __dirname,
    "./images/guide",
    filename
  );
  // Renvoyer l'image au client
  res.sendFile(imagePath);
}); 

app.use("/v1/admin", admin_route);
app.use("/v1/users", users_route);
app.use("/v1/destination", destination_route);
app.listen(port, () => {
  console.log(`Le serveur est démarrer sur le port ${port}`);
});