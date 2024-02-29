const Guide = require("../../../model/guide/guide.model");

const Admin = require("../../../model/admin/admin.model");

const async_handler = require(`express-async-handler`);
/* global process */

const mongoose = require("mongoose");
const { setAllMajWords, codeByCountry } = require("../../../utils/hook");
const validator = require("validator");
const { send_email } = require("../../../utils/send.email");
const ObjectdId = mongoose.Types.ObjectId;
const qrCode = require("qrcode");
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

  const date = new Date(); // crée un objet Date avec la date et l'heure actuelles
  const jour = String(date.getDate()).padStart(2, "0"); // extrait le jour et ajoute un zéro devant si le nombre n'a qu'un seul chiffre
  const mois = String(date.getMonth() + 1).padStart(2, "0"); // extrait le mois (en commençant par 0 pour janvier) et ajoute un zéro devant si le nombre n'a qu'un seul chiffre
  const annee = date.getFullYear(); // extrait l'année
  const heures = String(date.getHours()).padStart(2, "0"); // extrait les heures et ajoute un zéro devant si le nombre n'a qu'un seul chiffre
  const minutes = String(date.getMinutes()).padStart(2, "0"); // extrait les minutes et ajoute un zéro devant si le nombre n'a qu'un seul chiffre
  const secondes = String(date.getSeconds()).padStart(2, "0"); // extrait les secondes et ajoute un zéro devant si le nombre n'a qu'un seul chiffre
  const dateFormatee = `${jour}/${mois}/${annee} `;

  const data = `${setAllMajWords(true, firstName)} ${setAllMajWords(
    true,
    lastName
  )} est un guide enrégistré sur la plateforme du : Le Guide BJ le  ${dateFormatee};il est du ${country} et est spécialisé dans les zones ${zone}. Il parle bien ${language}. Contacter nous sur le: +229${
    process.env.telAdmin
  }
   `;

  try {
    qrCode.toDataURL(data, async (err, url) => {
      if (err)
        return res.status(500).json({
          message: "Erreur interne du serveur, veuillez réessayer plus tard",
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
        is_active: true,
        badge_url: url,
        code: codeByCountry(country),
      });

      await newGuide.save();

      fs.readFile("./html/guide/register.html", "utf-8", (err, data) => {
        if (err) {
          return res.status(401).json({ message: err });
        } else {
          const html = data
            .replace(/{names}/g, existingAdmin.names)
            .replace(/{zone}/g, existingAdmin.zone)
            .replace(/{language}/g, existingAdmin.language)
            .replace(/{country}/g, existingAdmin.country)
            .replace(/{email}/g, existingAdmin.email)
            .replace(/{tel}/g, existingAdmin.tel)
            .replace(/{description}/g, existingAdmin.description);

          send_email(existingAdmin.email, `Connexion au compte admin`, html);
        }
      });
      return res.status(201).json({
        message: `Inscription réeussie du Guide`,
      });
    });
  } catch (error) {
    res.status(403).json({
      message: `Erreur interne du serveur, veuillez réessayer plus tard`,
    });
  }
});

// 2-Suppression du profil des guides
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
  if (existingUser && existingUser._id.toString() !== req.params.idGuide)
    return res
      .status(401)
      .json({ message: `Cet émail est déjà utilisé par un utilisateur` });
  else
    try {
      Guide.findByIdAndUpdate(
        req.params.idGuide,
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
            code: codeByCountry(country),
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
module.exports.diseableGuide = async_handler(async (req, res) => {});
// 6-Activation du profil des guides
module.exports.activateGuide = async_handler(async (req, res) => {
  /*Vérifiez si c'est l'admin qui crée l'utilisateur*/
});
// 7-La liste des guides
module.exports.get_all_guide = async_handler(async (req, res) => {
  /**Recuperer avec la méthode find de mongoose sans les mots de passe */
  Guide.find((error, docs) => {
    if (!error) res.send(docs);
    else
      return res.status(500).json({
        message: `Vous pouvez pas récuperer les données des administrateurs`,
      });
  }).select(`-password`);
});

//8- Contrôleur pour obtenir le nombre de guide avec is_active
module.exports.get_active_and_diseable = async_handler(async (req, res) => {
  try {
    const countIsActive = await Guide.countDocuments({ is_active: true });
    const countIsDiseable = await Guide.countDocuments({ is_active: false });

    res.json({ countIsActive, countIsDiseable });
  } catch (error) {
    console.error("Erreur lors de la récupération du nombre de guide :", error);
    res.status(500).json({
      error: "Erreur serveur lors de la récupération du nombre de guide.",
    });
  }
});

module.exports.sendPdfListe = async_handler(async (req, res) => {
  const now = new Date(); // Récupérez la date et l'heure actuelle
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  }

  try {
    const users = await Guide.find(
      {},
      "names email tel zone language country code is_active " // Ajoutez la propriété 'nombreRetard' à la requête
    );
    // Filtrer les utilisateurs par propriété isSuperAdmin et isMember
    // const filteredUsers = users.filter(
    //   (membre) => membre.isSuperAdmin === false || membre.isMember === true
    // );

    // Trier les utilisateurs par ordre alphabétique des noms (proprieté 'names')
    const sortedUsers = users.sort((a, b) => a.names.localeCompare(b.names));
    // Créer un tableau HTML pour afficher tous les utilisateurs
    let tableHTML = `
      <table style=" font-family: Arial, sans-serif; width: 210mm; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #ECECEC; border-bottom: 1px solid #CCCCCC; text-align: center;">
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Membre</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Email</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Tel</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Zone</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Language</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Pays</th>
          </tr>
        </thead>
        <tbody>
    `;

    sortedUsers.forEach((user) => {
      tableHTML += `
          <tbody>
            <tr style="border-bottom: 1px solid #CCCCCC; ">
              <td style="padding: 2px; border: 1px solid #CCCCCC;color:${
                (user.is_active === "false" && "red") ||
                (user.is_active === "true" && "green")
              }">${user.names}</td>
              <td style="padding: 2px; border: 1px solid #CCCCCC;">${
                user.email
              }</td>
              <td style="padding: 2px; border: 1px solid #CCCCCC;">+${
                user.code
              }${user.tel}</td>
              <td style="padding: 2px; border: 1px solid #CCCCCC;">${
                user.zone
              }</td> 
              <td style="padding: 2px; border: 1px solid #CCCCCC;">${
                user.language
              }</td> 
              <td style="padding: 2px; border: 1px solid #CCCCCC;">${
                user.country
              }</td> 
            </tr>
          </tbody>
        `;
    });
    tableHTML += `
        </tbody>
      </table>
      <p>Date:${formatDate(now)} </p>
      <p>LE GUIDE BJ</p>
    `;

    send_email(
      process.env.userAdmin,
      `Liste des Guides de la plateforme : LE GUIDE BJ`,
      tableHTML
    );
    return res.status(201).json({
      message: `Liste des Guides de la plateforme envoyé`,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
// 8-Afficher les commentaires des users sur les guides

// 9-Supprimer les commentaires des users sur les guides

// 10-Modifier le commentaire des users sur les guides

// 11-Faire un commentaire sur les guides
