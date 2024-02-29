/* global process */
// /* global __dirname */

const Admin = require("../../../model/admin/admin.model");
const validator = require("validator");
const async_handler = require("express-async-handler");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const fs = require("fs");
const sendEmail_request = require(`../../../utils/send.email`);
const ObjectdId = mongoose.Types.ObjectId;
const sendEmail = sendEmail_request.send_email;

const jwt = require("jsonwebtoken");
const { generateCode, formatDate } = require("../../../utils/hook");

// 1-Inscription de l'admin principal
module.exports.register_Admin_Principal = async_handler(async (req, res) => {
  const { email, tel, password } = req.body;

  //Inscrit l'admin si seulement les identifiants fixé sont juste

  if (email !== process.env.userAdmin || tel !== process.env.telAdmin) {
    return res.status(401).json({
      message: "Erreur d'inscription procédure",
    });
  }

  //   Vérifiez si le mot de passe est juste
  if (password !== process.env.passAdmin) {
    return res.status(401).json({
      message: "Erreur d'inscription procédure !",
    });
  }

  // Verifier si les données saisit sont valide et non vide
  if (!validator.isEmail(email))
    return res.status(401).json({ message: "Saisissez un mail valide" });
  if (!validator.isLength(password, { min: 8, max: 30 }))
    return res.status(401).json({
      message:
        "La longeur de caractère du mot de passe doit être comprise entre 8 et 30",
    });
  if (!validator.isLength(tel, { min: 8, max: 8 }))
    return res.status(401).json({
      message: "Saisissez un numéro de téléphone valide",
    });

  // Vérifier si le mail de l'admin ou son tel existe déja
  let admin;
  try {
    admin = await Admin.findOne({ $or: [{ email }, { tel }] });
  } catch (error) {
    return res.status(500).json({ message: `Erreur interne du serveur` });
  }

  // Renvoyer une erreur 403 si l'email ou le tel est trouver
  if (admin)
    return res.status(403).json({
      message: `Admin exist`, 
    });

  // Crypter le mot de passe
  const hashed_password = bcrypt.hashSync(password, 10);

  try {
    //   Enrégistrer l'utilisateur
    const admin = await new Admin({
      email,
      tel,
      password: hashed_password,
      isAdmin: true,
      role: "admin_principal",
      name: `Admin_${0 + generateCode()}`,
      isManager: true,
      isAdminPrincipal: true,
    });
    admin.save();
    return res.status(200).json({
      message: "Inscription de l'admin réussie",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur interne du serveur, veuillez réessayez plus tard! ${error}`,
    });
  }
});
// 2-Inscription des administrateurs par role
module.exports.register_Admin_Role = async_handler(async (req, res) => {
  // Les administrateurs par role sont :  tâche,par groupe,
  const { email, tel, role, password } = req.body;

  // Verifier si les données saisit sont valide et non vide
  if (!validator.isEmail(email))
    return res.status(401).json({ message: "Saisissez un mail valide" });
  if (!validator.isLength(password, { min: 8, max: 30 }))
    return res.status(401).json({
      message:
        "La longeur de caractère du mot de passe doit être comprise entre 8 et 30",
    });
  if (!validator.isLength(tel, { min: 8, max: 8 }))
    return res.status(401).json({
      message: "Saisissez un numéro de téléphone valide",
    });
  let admin;
  if (!ObjectdId.isValid(req.params.id)) {
    return res.status(400).json({ message: `No authorize ${req.params.id} ` });
  }
  admin = await Admin.findById({ _id: req.params.id });


  if (!admin || admin.role !== "admin_principal")
    return res.status(400).json({
      message: "Vous n'êtes pas autorisé à crée un autre admin",
    });

  // Crypter le mot de passe
  const hashed_password = bcrypt.hashSync(password, 10);

  //   Enrégistrer l'admin
  try {
    const admin_role = await new Admin({
      email,
      tel,
      password: hashed_password,
      isManager: true,
      isAdminPrincipal: false,
      role,
      name: `compte_${0 + generateCode()}_manager${role}`,
    });
    admin_role.save();
    return res.status(200).json({
      message: `Inscription de l'admin par rôle ${role} réussie`,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur interne du serveur, veuillez réessayez plus tard! ${error}`,
    });
  }
});

//3-Connexion de l'administrateur
module.exports.login_Admin = async_handler(async (req, res) => {
  const { identifier, password } = req.body;

  /*1 - Vérifiez maintenant si les données saisir respecte nos schémas de validation */
  if (!identifier || !password)
    return res
      .status(401)
      .json({ message: `Veuillez remplir toutes les cases.` });

  /*2- Récuperer l'email ou le numéro de phone pour se connecter */
  let existingAdmin;

  if (validator.isEmail(identifier)) {
    existingAdmin = { email: identifier }; /**Accepte si c'est un email */
  } else if (validator.isMobilePhone(identifier, `any`)) {
    /**Acccepte si c'est un numéro de n'importe quel pays c'est pourquoi on à 'any' comme seconde valeur */
    existingAdmin = { tel: identifier };
  } else
    return res.status(400).json({
      message: `Veuillez saisir un émail ou un numéro de téléphone  valide.`,
    });
  /**Recuperer la valeur qui passe et le rechercher */
  Admin.findOne(existingAdmin)
    .then((user) => {
      if (!user)
        return res.status(401).json({
          message: `Vous n'avez pas de compte admin avec ces informations d'identification, veuillez vous inscrire en premier.`,
        });
        if(user.isAdminPrincipal === true){
          fs.readFile("./html/admin/login_admin_principal.html", "utf-8", (err, data) => {
            if (err) {
              return res.status(401).json({ message: err });
            } else {
              const html = data
                .replace(/{name}/g, existingAdmin.name)
      
              sendEmail(
                existingAdmin.email,
                `Connexion au compte admin`,
                html
              );
            }
          });
        }
     
      /* 3 - Décrypter le mot de passe avant de le vérifiez avec celle de la base de donnée qvec bcrypt*/
      const passwordHashed = bcrypt.compareSync(password, user.password);
      if (!passwordHashed) {
        return res.status(401).json({ message: `Mot de passe incorrect.` });
      }
      /**Authentifer l'user dans le cookie avec son id personnel */
      const token = jwt.sign({ id: user._id }, process.env.token_auth_admin, {
        expiresIn: `3d` /**Duréé maximum de vie du token */,
      });

      /* 5 - Envoyer la réponse dans le cookie */

      res.cookie(String("leguidebj_admin"), token, {
        path: `/`, // Path cookie
        expires: new Date(
          Date.now() + 24 * 60 * 60 * 1000 * 3
        ) /**Durée de vie du cookie qui est de 3 jours */,
        httpOnly: true, //Only server
        sameSite: `lax`, //cross site, empêcher les réquêtes d'autres domaines
        secure: true, // https
      });

      /**Réponse finale quand il est authentifié */
      return res.status(200).json({ message: `Connection réussie` });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Erreur interne du serveur, veuillez réessayez plus tard ! ${err}`,
      });
    });
});

//4-Déconnexion de la plateforme
module.exports.logout = async_handler(async (req, res) => {
  /**Récuperer le cookie */
  const cookies = req.headers.cookie;
  const preventToken = cookies?.split(`=`)[1];
  if (!preventToken) {
    return res
      .status(404)
      .json({ message: `Déconnexion échouée, veuillez réessayer plus tard` });
  }
  /**Vérifez si l'utilisateur est connecté avec le cookie stocké dans le navigateur */
  jwt.verify(String(preventToken), process.env.token_auth_admin, (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: `Authentification échoué ${err}` });
    }
    res.clearCookie(`leguidebj_admin`);
    req.cookies = req.cookies || {};
    req.cookies[`leguidebj_admin`] = ``;
    /**Réponse finale */
    return res.status(200).json({ message: `Déconnexion` });
  });
});
