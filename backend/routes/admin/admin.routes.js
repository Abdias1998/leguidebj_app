const router = require("express").Router();
const admin_auth_controler = require("../../controler/admin/auth/admin.auth_controler");
const admin_retrieve_controler = require("../../controler/admin/retrieve/admin.retrieve");
/**Inscription de l'admin principal */
router.post("/register_admin", admin_controler.register_Admin_Principal);

// Inscription des admins par rôle
router.post(
  "/register_admin_role/:id",
  admin_auth_controler.register_Admin_Role
);

//Liste de touts les administrateurs
router.get("/retrieve_all_admin", admin_retrieve_controler.getAllAdmin);

module.exports = router;
