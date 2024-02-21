const Guide = require("../../model/guide/guide.model");

const Admin = require("../../model/admin/admin.model");

const async_handler = require(`express-async-handler`);
/* global process */

const mongoose = require("mongoose");
const { setAllMajWords } = require("../../../utils/hook");
const validator = require("validator");
const ObjectdId = mongoose.Types.ObjectId;

//1-Inscription des guides
module.exports.createGuide = async_handler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    tel,
    country,
    zone,
    language,
    description,
  } = req.body;

  /*Vérifiez si c'est l'admin qui crée l'utilisateur*/
  let admin;
  if (!ObjectdId.isValid(req.params.id)) {
    return res.status(400).json({ message: `No authorize ${req.params.id} ` });
  }
  admin = await Admin.findById({ _id: req.params.id });
  if (!admin)
    return res.status(400).json({
      message: "No authorize ",
    });

  if (
    !admin ||
    admin.role !== "admin_principal" ||
    admin.role !== "manager_guide"
  )
    return res.status(400).json({
      message: "Vous n'êtes pas autorisé à crée une guide",
    });

  /**Envoyer les données dans notre base de donnée */
  const document = req.files?.map(
    (file) => `${process.env.client_url}/document/${file.originalname}`
  );
  if (
    validator.isEmpty(firstName) ||
    validator.isEmpty(lastName) ||
    validator.isEmpty(email) ||
    validator.isEmpty(country) ||
    validator.isEmpty(zone) ||
    validator.isEmpty(description) ||
    validator.isEmpty(language) ||
    validator.isEmpty(tel)
  )
    return res.status(401).json({
      message: `Veuillez remplir touts les champs`,
    });

  if (
    !validator.isLength(firstName, { min: 2, max: 15 }) ||
    !validator.isLength(lastName, { min: 2, max: 25 })
  )
    return res.status(401).json({
      message: `Le nom ou le prénom est trop pétit ou trop long`,
    });
  const newGuide = new Guide({
    firstName,
    lastName: setAllMajWords(true, lastName),
    names: `${firstName.toUpperCase()} ${setAllMajWords(true, lastName)}`,
    email,
    tel,
    country,
    zone,
    description,
    language,
    document,
  });

  try {
    await newGuide.save();
    res.status(201).json({
      message: `Inscription réeussie du Guide`,
    });
  } catch (error) {
    return res.status(401).json({
      message: `Erreur interne du serveur, ${error}`,
    });
  }
});

// E-Suppression du profil des guides
module.exports.deleteGuide = async_handler(async (req, res) => {
  /*Vérifiez si c'est l'admin qui crée l'utilisateur*/
  let admin;
  if (!ObjectdId.isValid(req.params.id)) {
    return res.status(400).json({ message: `No authorize ${req.params.id} ` });
  }
  admin = await Admin.findById({ _id: req.params.id });
  if (!admin)
    return res.status(400).json({
      message: "No authorize ",
    });

  if (
    !admin ||
    admin.role !== "admin_principal" ||
    admin.role !== "manager_guide"
  )
    return res.status(400).json({
      message: "Vous n'êtes pas autorisé à supprimer une guide",
    });

  //Si le guide existe, le supprimer de la bse de donnée
  await Guide.findByIdAndRemove(req.params.id, (error) => {
    if (!error)
      /**Réponse finale */
      return res
        .status(200)
        .json({ message: `Le guide supprimez avec succèes` });
    else
      return res.status(500).json({
        message: `Erreur interne du serveur, veuillez réessayez plus tard la suppression de l'utilisateur ${req.params.id}`,
      });
  }).clone();
});

// 4-Modification du profil des guides
module.exports.updateGuide = async_handler(async (req, res) => {
  /*Vérifiez si c'est l'admin qui crée l'utilisateur*/
  let admin;
  if (!ObjectdId.isValid(req.params.id)) {
    return res.status(400).json({ message: `No authorize ${req.params.id} ` });
  }
  admin = await Admin.findById({ _id: req.params.id });
  if (!admin)
    return res.status(400).json({
      message: "No authorize ",
    });

  if (
    !admin ||
    admin.role !== "admin_principal" ||
    admin.role !== "manager_guide"
  )
    return res.status(400).json({
      message: "Vous n'êtes pas autorisé à supprimer une guide",
    });

  const {
    firstName,
    lastName,
    email,
    tel,
    country,
    zone,
    description,
    language,
  } = req.body;
  /**La méthode ObjectId de mongoose pour vérifer si le nombre de caractère est exacte à celle de mongoose */
  if (!ObjectdId.isValid(req.params.id))
    return res.status(404).send({ messsage: `Utulisateur inconnu` });
  /*2 - Vérifiez maintenant si les données saisir respecte notre schéma de validation */
  /**Mettre à jour 4 champs(nom,prénom,tel et email) */
  if (
    validator.isEmpty(firstName) ||
    validator.isEmpty(lastName) ||
    validator.isEmpty(email) ||
    validator.isEmpty(country) ||
    validator.isEmpty(zone) ||
    validator.isEmpty(description) ||
    validator.isEmpty(language) ||
    validator.isEmpty(tel)
  )
    return res.status(401).json({
      message: `Veuillez remplir touts les champs`,
    });
  if (
    !validator.isLength(firstName, { min: 2, max: 15 }) ||
    !validator.isLength(lastName, { min: 2, max: 25 })
  )
    return res.status(401).json({
      message: `Le nom ou le prénom est trop pétit ou trop long`,
    });
  if (!validator.isEmail(email))
    return res
      .status(401)
      .json({ message: `Votre nouvelle adress email est invalid` });

  let user;
  user = await Guide.findById({ _id: req.params.id });
  if (!user)
    return res.status(403).json({ messsage: `L'identifiant n'existe pas` });

  /**Metrre à jour les informatio dans la base de donnéé */

  /**Si l'email est trouver, lui renvoyé une réponse 403 qu'il est déja pris */

  let existingUser;
  existingUser = await Guide.findOne({ email: email });
  if (existingUser && existingUser._id.toString() !== req.params.id)
    return res
      .status(401)
      .json({ message: `Cet émail est déjà utilisé par un utilisateur` });
  else
    try {
      Guide.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            firstName: firstName,
            lastName: setAllMajWords(true, lastName),
            tel: tel,
            email: email,
            country: country,
            zone: zone,
            description: description,
            language: language,
            names: `${firstName.toUpperCase()} ${setAllMajWords(
              true,
              lastName
            )}`,
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
              message: `L'utilisateur avec cet email existe déja, veuillez choisir un autre`,
            });
        }
      ).select(`-password`);
    } catch (error) {
      return res.status(500).json({
        message: `Erreur interne du serveur, veuillez réessayer plus tard !' ${error}`,
      });
    }
});
// 5-Desactivation du profil des guides
module.exports.diseableGuide = async_handler(async (req, res) => {
  /*Vérifiez si c'est l'admin qui crée l'utilisateur*/
  let admin;
  if (!ObjectdId.isValid(req.params.id)) {
    return res.status(400).json({ message: `No authorize ${req.params.id} ` });
  }
  admin = await Admin.findById({ _id: req.params.id });
  if (!admin)
    return res.status(400).json({
      message: "No authorize ",
    });

  if (
    !admin ||
    admin.role !== "admin_principal" ||
    admin.role !== "manager_guide"
  )
    return res.status(400).json({
      message: "Vous n'êtes pas autorisé à supprimer une guide",
    });
});
// 6-Activation du profil des guides
module.exports.activateGuide = async_handler(async (req, res) => {
  /*Vérifiez si c'est l'admin qui crée l'utilisateur*/
  let admin;
  if (!ObjectdId.isValid(req.params.id)) {
    return res.status(400).json({ message: `No authorize ${req.params.id} ` });
  }
  admin = await Admin.findById({ _id: req.params.id });
  if (!admin)
    return res.status(400).json({
      message: "No authorize ",
    });

  if (
    !admin ||
    admin.role !== "admin_principal" ||
    admin.role !== "manager_guide"
  )
    return res.status(400).json({
      message: "Vous n'êtes pas autorisé à supprimer une guide",
    });
});
// 7-La liste des guides

// 8-Afficher les commentaires des users sur les guides

// 9-Supprimer les commentaires des users sur les guides

// 10-Modifier le commentaire des users sur les guides

// 11-Faire un commentaire sur les guides
