
const router = require("express").Router();

const destination_controler = require("../../controler/admin/destination/destinaton.controler");
const multer = require("multer");

const storages = multer.diskStorage({ 
  destination: (req, file, cb) => {
    cb(null, "./images/destination");
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
// Création de destination
router.post("/create_destination",  uploads.array("destination", 50), destination_controler.createDestination); //ok
// Lire la destination
router.get("/read_destination",   destination_controler.get_all_destination); //ok
// Modifier la destination
router.put("/update_destination/:id",   destination_controler.updateDestination); //ok
// Supprimer la destination
router.delete("/delete_destination/:id",   destination_controler.deleteDestination); //ok

module.exports = router;
