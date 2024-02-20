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

//1- Récuperer touts les admins
module.exports.get_all_admin = async_handler(async (req, res) => {
  /**Recuperer avec la méthode find de mongoose sans les mots de passe */
  Admin.find((error, docs) => {
    if (!error) res.send(docs);
    else
      return res.status(500).json({
        message: `Vous pouvez pas récuperer les données des administrateurs`,
      });
  }).select(`-password`);
});

//2- Mettre a jour le profil d'un admin
module.exports.update_profil_admin = async_handler(async (req, res) => {
  const { email, tel, role } = req.body;
  /**La méthode ObjectId de mongoose pour vérifer si le nombre de caractère est exacte à celle de mongoose */
  if (!ObjectdId.isValid(req.params.id))
    return res.status(404).send({ messsage: `Utulisateur inconnu` });
  /*2 - Vérifiez maintenant si les données saisir respecte notre schéma de validation */
  /**Mettre à jour 4 champs(nom,prénom,tel et email) */
  if (
    validator.isEmpty(email) ||
    validator.isEmpty(tel) ||
    validator.isEmpty(role)
  )
    return res.status(401).json({
      message: `Veuillez remplir touts les champs`,
    });
  if (!validator.isEmail(email))
    return res
      .status(401)
      .json({ message: `Votre nouvelle adress email est invalid` });
  if (!validator.isLength(tel, { min: 8, max: 8 }))
    return res.status(401).json({
      message: `Saisissez un nouveau numéro de téléphone du Bénin valide sans espace. Ex: 53000000`,
    });
  let admin;
  admin = await Admin.findById({ _id: req.params.id });
  if (admin.role !== "admin_principal")
    return res.status(403).json({
      messsage: `Vous n'ètes pas autorisé en tant que administrateur`,
    });

  /**Metrre à jour les informatio dans la base de donnéé */

  /**Si l'email est trouver, lui renvoyé une réponse 403 qu'il est déja pris */

  let existingUser;
  existingUser = await Admin.findOne({ email: email });
  if (existingUser && existingUser._id.toString() !== req.params.id)
    return res
      .status(401)
      .json({ message: `Cet émail est déjà utilisé par un utilisateur` });
  else
    try {
      Admin.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            tel: tel,
            email: email,
            role: role,
          },
        },
        {
          new: true,
        },
        (err, docs) => {
          /**Réponse finale */
          if (!err)
            return res.status(200).json({
              message: "Vos informations sont mises à jours",
              docs /**Renvoyer l'user sans son mot de passe */,
            });
          else
            return res.status(401).json({
              message: `L'administrateur avec cet email existe déja, veuillez choisir un autre`,
            });
        }
      ).select(`-password`);
    } catch (error) {
      return res.status(500).json({
        message: `Erreur interne du serveur, veuillez réessayer plus tard !' ${error}`,
      });
    }
});

// 3-Supprimer un admin
module.exports.delete_profil_admin = async_handler(async (req, res) => {
  /**Vérifez si l'id est conforme à cele de_id mongoose */
  if (!ObjectdId.isValid(req.params.id)) {
    return res
      .status(400)
      .json({ message: `Utulisateur inconnu ${req.params.id}` });
  }

  /**Rechercher l'identifiant avec l'id passer en params */
  let admin;
  admin = await Admin.findById({ _id: req.params.id });
  if (!admin || admin.role !== "admin_principal")
    return res.status(403).json({ messsage: `Vous n'ètes pas autorisé` });
  /**Si l'identifiant existe, le supprimer de la bse de donnée */
  await Admin.findByIdAndRemove(req.params.id, (error) => {
    if (!error)
      /**Réponse finale */
      return res
        .status(200)
        .json({ message: `L'utulisateur supprimez avec succèes` });
    else
      return res.status(500).json({
        message: `Erreur interne du serveur, veuillez réessayez plus tard la suppression de l'utilisateur ${req.params.id}`,
      });
  }).clone();
});

// 4-Récuperer les infos d'un admin
module.exports.info_admin = async_handler(async (req, res) => {
  if (!ObjectdId.isValid(req.params.id)) {
    return res.status(400).send("Id Inconnue" + req.params.body);
  }

  Admin.findById(req.params.id, (err, docs) => {
    if (!err) res.status(200).json({ message: docs });
    else
      return res.status(500).json({
        message: "Id de l'utilisateur est inconnu",
      });
  }).select("-password");
});
