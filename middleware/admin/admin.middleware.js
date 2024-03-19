/* global process */
const Admin = require("../../model/admin/admin.model");
const jwt = require("jsonwebtoken");
const async_handler = require(`express-async-handler`);

module.exports.verify_token_admin = async_handler(async (req, res, next) => {
  /**Récuperer le cookie */
  const cookies = req.headers.cookie;
  const token = cookies?.split("=")[1];
  console.log(token);
  /**Si aucun n'existe, renvoyer une erreur  */
  try {
    if (!token) {
      return res
        .status(404)
        .json({ message: "Vous n'avez pas de token d'authentification" +token});
    }
  } catch (error) {
    return res.status(500).json({
      message:
        "Erreur interne du serveur, veuillez vérifiez votre connexion internet",
    });
  }
  /**On vérifie si le cookie présent est celle qu'on avait générer lors de l'authentification */

  jwt.verify(String(token), process.env.token_auth_admin, (err, user) => {
    if (!err) {
      // return res.status(400).json({ message: "Votre Token est invalide." });
      req.id = user?.id;
    }
  });
  next(); /**Passer au controleur suivant */
});

/**Renvoyer les infos de l'utilisateur après avoir vériifez le token présent dans le cookie */
module.exports.get_admin_info = async_handler(async (req, res) => {
  const adminId = req.id;
  let admin;
  try {
    admin = await Admin.findById(adminId, "-password");
  } catch (error) {
    return new Error(error);
  }
  try {
    if (admin) {
      return res.status(200).json({ admin });
    }
  } catch (error) {
    res.status(404).json({ message: `L'utilisateur n'existe pas ${error}` });
  }
});
