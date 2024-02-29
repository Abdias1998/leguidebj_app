const Users = require("../../model/users/user.model");
const async_handler = require("express-async-handler");

//1- Récuperer touts les admins
module.exports.get_all_users = async_handler(async (req, res) => {
  /**Recuperer avec la méthode find de mongoose sans les mots de passe */
  Users.find((error, docs) => {
    if (!error) res.send(docs);
    else
      return res.status(500).json({
        message: `Vous pouvez pas récuperer les données des utilisateurs`,
      });
  }).select(`-password`);
});
