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
  express.static(path.join(__dirname, "./frontend/build/assets/guide/document"))
);

app.get("/frontend/build/assets/guide/document/:filename", (req, res) => {
  const filename = req.params.filename;
  // Récupérer le chemin complet de l'image
  const imagePath = path.join(
    __dirname,
    "./frontend/build/assets/guide/document",
    filename
  );
  // Renvoyer l'image au client
  res.sendFile(imagePath);
}); 
app.use("/v1/admin", admin_route);
app.listen(port, () => {
  console.log(`Le serveur est démarrer sur le port ${port}`);
});

// const express = require("express");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const appNext = next({ dev });
// const handle = appNext.getRequestHandler();

// appNext.prepare().then(() => {
//   const app = express();
//   const port = process.env.PORT || 3000;

//   // Ajoutez ici vos middlewares et routes Express.js

//   // Exemple de route Express pour servir des fichiers statiques de Next.js
//   app.get("/_next/*", (req, res) => {
//     handle(req, res);
//   });

//   // Exemple de route Express pour gérer toutes les autres requêtes
//   app.get("*", (req, res) => {
//     handle(req, res);
//   });

//   app.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });
