const router = require("express").Router();

const admin_auth_controler = require("../../controler/admin/auth/admin.auth_controler");

const admin_retrieve_controler = require("../../controler/admin/retrieve/admin.retrieve");

const admin_middleware = require("../../middleware/admin/admin.middleware");

//Inscription de l'admin principal
router.post("/register_admin", admin_auth_controler.register_Admin_Principal);

// Inscription des admins par rôle
router.post(
  "/register_admin_role/:id",
  admin_middleware.verify_token_admin,
  admin_auth_controler.register_Admin_Role
);
//Connexion des admins
router.post("/login_admin_role", admin_auth_controler.login_Admin);

//Changement du mot de passe forget
router.post("/forget_admin", admin_auth_controler.forget_password_admin);

//Changement du mot de passe reset
router.post("/reset_admin/:token", admin_auth_controler.reset_password_admin);

// Déconnexion partielle
router.post(
  "/logout_session_admin",
  admin_middleware.verify_token_admin,
  admin_auth_controler.logout_session_admin
);

// Déconnexion
router.post(
  "/logout_admin",
  admin_middleware.verify_token_admin,
  admin_auth_controler.logout
);

//Liste de touts les administrateurs
router.get(
  "/retrieve_all_admin",
  admin_middleware.verify_token_admin,
  admin_retrieve_controler.get_all_admin
);
// Mettre à jour le profil d'un admin
router.put(
  "/update_admin/:id",
  admin_middleware.verify_token_admin,
  admin_retrieve_controler.update_profil_admin
);
// Supprimer le profil d'un admin
router.delete(
  "/delete_admin/:id",
  admin_middleware.verify_token_admin,
  admin_retrieve_controler.delete_profil_admin
);
// Récuperer les infos de profil d'un admin
router.get(
  "/retrieve_admin/:id",
  admin_middleware.verify_token_admin,
  admin_retrieve_controler.info_admin
);

/**Vérifiez si son token est valide en renvoyant ses informations sans son mot de passse*/
router.get(
  "/admin_verify_token",
  admin_middleware.verify_token_admin,
  admin_middleware.get_admin_info
);

module.exports = router;
