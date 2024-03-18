const Users = require("../../../model/users/user.model");
const async_handler = require("express-async-handler");
const mongoose = require("mongoose");
const { send_email } = require("../../../utils/send.email");
const ObjectdId = mongoose.Types.ObjectId;
module.exports.get_all_users = async_handler(async (req, res) => {
  try {
    const users = await Users.find().select('-password');
    res.send(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({
      message: `Vous ne pouvez pas récupérer les données des utilisateurs`,
    });
  }
});

// Users bannie

module.exports.getUserStats = async (req, res) => {
  try {
    const bannedUserCount = await Users.countDocuments({ user_banned: true });

    // const usersWithReporting = await Users.aggregate([
    //   {
    //     $match: {
    //       reporting: { $exists: true },
    //     },
    //   },
    //   {
    //     $project: {
    //       reportingCount: { $size: "$reporting" },
    //     },
    //   },
    //   {
    //     $match: {
    //       reportingCount: { $gt: 5 },
    //     },
    //   },
    // ]);

    res.json({
      bannedUserCount,
      // usersWithReportingCount: usersWithReporting.length,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des statistiques" });
  }
};

// 2-Suppression du profil des guides
module.exports.deleteUser = async_handler(async (req, res) => {
  /**La méthode ObjectId de mongoose pour vérifer si le nombre de caractère est exacte à celle de mongoose */
  if (!ObjectdId.isValid(req.params.id))
    return res.status(404).send({ messsage: `Utulisateur inconnu` });
  //Si le guide existe, le supprimer de la bse de donnée
  await Users.findByIdAndRemove(req.params.id, (error) => {
    if (!error)
      /**Réponse finale */
      return res
        .status(200)
        .json({ message: `L'utilisateur'supprimez avec succèes` });
    else
      return res.status(500).json({
        message: `Erreur interne du serveur, veuillez réessayez plus tard la suppression de l'utilisateur ${req.params.id}`,
      });
  }).clone();
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
    const users = await Users.find(
      {},
      "firstName email " // Ajoutez la propriété 'nombreRetard' à la requête
    );
    // Filtrer les utilisateurs par propriété isSuperAdmin et isMember
    // const filteredUsers = users.filter(
    //   (membre) => membre.isSuperAdmin === false || membre.isMember === true
    // );

    // Trier les utilisateurs par ordre alphabétique des noms (proprieté 'names')
    const sortedUsers = users.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    // Créer un tableau HTML pour afficher tous les utilisateurs
    let tableHTML = `
      <table style=" font-family: Arial, sans-serif; width: 210mm; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #ECECEC; border-bottom: 1px solid #CCCCCC; text-align: center;">
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Membre</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Email</th>
           
          </tr>
        </thead>
        <tbody>
    `;

    sortedUsers.forEach((user) => {
      tableHTML += `
          <tbody>
            <tr style="border-bottom: 1px solid #CCCCCC; ">
            
            <td style="padding: 2px; border: 1px solid #CCCCCC;">+${user.fistName}${user.tel}</td>

              <td style="padding: 2px; border: 1px solid #CCCCCC;">${user.email}</td>
             
            
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
      `Liste des Utilisateurs de la plateforme : LE GUIDE BJ`,
      tableHTML
    );
    return res.status(201).json({
      message: `Liste des utilisateurs de la plateforme envoyé`,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
