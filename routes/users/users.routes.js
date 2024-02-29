const router = require("express").Router();
const users_controler = require("../../controler/users/users.controler");
// Recuperer touts les users
router.get("/", users_controler.get_all_users);
module.exports = router;
