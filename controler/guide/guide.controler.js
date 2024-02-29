const Guide = require("../../model/guide/guide.model");

const async_handler = require(`express-async-handler`);
/* global process */

const mongoose = require("mongoose");
const { setAllMajWords } = require("../../utils/hook");
const validator = require("validator");
const ObjectdId = mongoose.Types.ObjectId;

//3- Recuperer touts les guides
module.exports.get_all_guide = async_handler(async (req, res) => {
  /**Recuperer avec la méthode find de mongoose sans les mots de passe */
  Guide.find((error, docs) => {
    if (!error) res.send(docs);
    else
      return res.status(500).json({
        message: `Vous pouvez pas récuperer les données des guides`,
      });
  }).select(`-password`);
});

// 8-Afficher les commentaires des users sur les guides

// 9-Supprimer les commentaires des users sur les guides

// 10-Modifier le commentaire des users sur les guides

// 11-Faire un commentaire sur les guides
