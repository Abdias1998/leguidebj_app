/* global process */
/* global __dirname */
const Admin = require("../../../model/admin/admin.model");
const validator = require("validator");
const async_handler = require("express-async-handler");
const bcrypt = require("bcrypt");
const fs = require("fs");
const crypto = require("crypto");
const { send_email } = require("../../../utils/send.email");
const jwt = require("jsonwebtoken");

module.exports.getAllAdmin = async_handler(async (req, res) => {
  /**Recuperer avec la méthode find de mongoose sans les mots de passe */
  Admin.find((error, docs) => {
    if (!error) res.send(docs);
    else
      return res.status(500).json({
        message: `Vous pouvez pas récuperer les données des administrateurs`,
      });
  })
    .select(`-password`)
    .sort({ firstName: 1 }); /**Renvoyer par ordre alphabétique */
});
