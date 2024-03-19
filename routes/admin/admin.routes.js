const router = require("express").Router();

const admin_auth_controler = require("../../controler/admin/auth/admin.auth_controler");

const admin_retrieve_controler = require("../../controler/admin/retrieve/admin.retrieve");
const admin_guide_controler = require("../../controler/admin/guide/admin.guide.controler");
const admin_guide_comments_controler = require("../../controler/admin/guide/comment/admin.guide.comment.controler");
const admin_users_controler = require("../../controler/admin/users/admin.users.controler");

const admin_middleware = require("../../middleware/admin/admin.middleware");
const multer = require("multer");

const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/assets/guide/document");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  }, 
});
// const uploads = multer({ storage: storages });
const uploads = multer({
  storage: storages,
  limits: { fileSize: 10 * 1024 * 1024 },
});
//Inscription de l'admin principal
router.post("/register_admin", admin_auth_controler.register_Admin_Principal); //ok


//Connexion des admins  
router.post("/login_admin_role", admin_auth_controler.login_Admin); //OK
/**Vérifiez si son token est valide en renvoyant ses informations sans son mot de passse*/
router.get(
  "/admin_verify_token",
  // admin_middleware.verify_token_admin,
  admin_middleware.get_admin_info
);
router.get(
  "/admin_profil_info/:id",
  // admin_middleware.verify_token_admin,
  admin_auth_controler.adminInfo
);

// Déconnexion
router.post(
  "/logout_admin",
  // admin_middleware.verify_token_admin,
  admin_auth_controler.logout
);
// Inscription des admins par rôle
router.post(
  "/register_admin_role",
  // admin_middleware.verify_token_admin,
  admin_auth_controler.register_Admin_Role
); ///ok
//Liste de touts les administrateurs
router.get(
  "/retrieve_all_admin",
  // admin_middleware.verify_token_admin,
  admin_retrieve_controler.get_all_admin
); //ok

// Supprimer le profil d'un admin
router.delete(
  "/delete_admin/:id",
  // admin_middleware.verify_token_admin,
  admin_retrieve_controler.delete_profil_admin
); //ok

// Récuperer les infos de profil d'un admin
// router.get(
//   "/retrieve_admin/:id",
  admin_middleware.verify_token_admin,
//   admin_retrieve_controler.
// );

/**Recuperer le nombre total d'admin , de manager*/
router.get(
  "/admin_total_role",
  // admin_middleware.verify_token_admin,
  admin_retrieve_controler.getCountByRoles
); //ok

// Envoyer la liste des Managers
router.get(
  "/send_pdf_all_manager",
  // admin_middleware.verify_token_admin,
  admin_retrieve_controler.sendPdfListeMember
);
// Les guides

// Creer un guide
router.post(
  "/register_guide",
  // admin_middleware.verify_token_admin,
  uploads.array("document", 50),
  admin_guide_controler.createGuide
); //ok

// Supprimer un guide
router.delete(
  "/delete_guide/:id",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.deleteGuide
); //ok
router.get(
  "/get-guides-by-year",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.get_guides_by_year
); //ok
router.get(
  "/get-users-by-year",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.get_users_by_year
); //ok
// Mettre à jour un guide
router.put(
  "/update_guide/:id",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.updateGuide
); //ok

// Recuperer les guides
router.get(
  "/get_all_guides",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.get_all_guide
); //ok


// le nombre total de commentaire pour touts les guides
router.get(
  "/get_all_guides_comments",
  // admin_middleware.verify_token_admin,
  admin_guide_comments_controler.getTotalCommentsForAllGuide
);
// le nombre total de guide active et non active
router.get(
  "/get_all_guides_active!",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.get_active_and_diseable
); //ok
//Désactiver un guide
router.put(
  "/disebale-guide/:guideId",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.disableGuide
); //ok

// Envoyer la liste des guides
router.get(
  "/send_pdf_all_guide",
  // admin_middleware.verify_token_admin,
  admin_guide_controler.sendPdfListe
);
// Les utilisateurs
// Recuperer les utilisateurs
router.get(
  "/get_all_users",
  // admin_middleware.verify_token_admin,
  admin_users_controler.get_all_users
);
// Recuperer les utilisateurs bannie et signaler
router.get(
  "/users_total_order",
  // admin_middleware.verify_token_admin,
  admin_users_controler.getUserStats
);

// Envoyer la liste des users
router.get(
  "/send_pdf_all_users",
  // admin_middleware.verify_token_admin,
  admin_users_controler.sendPdfListe
);
module.exports = router;
