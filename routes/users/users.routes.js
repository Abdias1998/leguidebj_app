const router = require("express").Router();
const users_controler = require("../../controler/users/users.controler");
const users_auth = require("../../controler/users/auth/users.auth.controler");
// Insription 
router.post("/register", users_auth.registerUser);
// Recuperer les users
module.exports = router;
