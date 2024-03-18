/* global process */
// /* global __dirname */
const Admin = require("../../../model/admin/admin.model");
const validator = require("validator");
const async_handler = require("express-async-handler");
// const bcrypt = require("bcrypt");
// const fs = require("fs");
// const crypto = require("crypto");
// const { send_email } = require("../../../utils/send.email");
// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { send_email } = require("../../../utils/send.email");
const ObjectdId = mongoose.Types.ObjectId;
//1- Récuperer touts les admins
module.exports.get_all_admin = async_handler(async (req, res) => {
  try {
    const users = await Admin.find().select('-password');
    res.send(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({
      message: `Vous ne pouvez pas récupérer les données des administrateurs`,
    });
  }
});

// 3-Supprimer un admin
module.exports.delete_profil_admin = async_handler(async (req, res) => {
 
 
  const { id } = req.params;

  try {
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      return res.status(404).json({ message: 'Administrateur non trouvé' });
    }
    res.json({ message: 'Administrateur supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'administrateur :', error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'administrateur' });
  }
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

// Contrôleur pour obtenir le nombre d'admins avec isManager et isAdminPrincipal
module.exports.getCountByRoles = async_handler(async (req, res) => {
  try {
    const countIsManager = await Admin.countDocuments({ isManager: true });
    const countIsAdminPrincipal = await Admin.countDocuments({
      isAdminPrincipal: true,
    });

    res.json({ countIsManager, countIsAdminPrincipal });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du nombre d'admins par rôle :",
      error
    );
    res.status(500).json({
      error:
        "Erreur serveur lors de la récupération du nombre d'admins par rôle.",
    });
  }
});

module.exports.sendPdfListeMember = async_handler(async (req, res) => {
  try {
    const users = await Admin.find(
      {},
      "name email tel role isAdminPrincipal isManager"
    );

    // Filtrer les utilisateurs par propriété isSuperAdmin et isMember
    const filteredUsers = users.filter(
      (membre) => membre.isAdminPrincipal === false
    );

    // Trier les utilisateurs par ordre alphabétique des noms (proprieté 'names')
    const sortedUsers = filteredUsers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Créer un tableau HTML pour afficher tous les utilisateurs triés par ordre alphabétique des noms
    let tableHTML = `
      <table style=" font-family: Arial, sans-serif; width: 210mm; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #ECECEC; border-bottom: 1px solid #CCCCCC; text-align: center;">
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Compte</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Email</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Tél</th>
            <th style="padding: 2px; border: 1px solid #CCCCCC;">Rôle</th>
      
          </tr>
        </thead>
        <tbody>
    `;

    sortedUsers.forEach((user) => {
      tableHTML += `
        <tbody>
          <tr style="border-bottom: 1px solid #CCCCCC;">
            <td style="padding: 2px; border: 1px solid #CCCCCC;">${user.name}</td>
            <td style="color:green;padding: 2px; border: 1px solid #CCCCCC;">${user?.email}</td>
            <td  style="color:blue;padding: 2px; border: 1px solid #CCCCCC;">${user?.tel}</td>
            <td style="color:orange;padding: 2px; border: 1px solid #CCCCCC;">${user?.role}</td>
          
          </tr>
        </tbody>
      `;
    });

    tableHTML += `
      </tbody>
    </table>
  `;

    send_email(
      process.env.userAdmin,
      `Liste des Admins de la plateforme : LE GUIDE BJ`,
      tableHTML
    );
    return res.status(201).json({
      message: `Liste des administrateurs de la plateforme envoyé`,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
