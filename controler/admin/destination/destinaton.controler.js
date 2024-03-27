//1-Inscription des guides
const async_handler = require(`express-async-handler`);
/* global process */
const validator = require("validator");
const Destination = require('../../../model/admin/destination/destination.model')
const mongoose = require('mongoose')
const ObjectdId = mongoose.Types.ObjectId;
module.exports.createDestination = async_handler(async (req, res) => {
    const {
    titre,price,texte,duration
    } = req.body;
  
    
  
  
    /**Envoyer les données dans notre base de donnée */
    const destination = req.files?.map(
      (file) => `${process.env.backend_url}/images/destination/${file.originalname}`
    );
    if (
      validator.isEmpty(titre) ||
      validator.isEmpty(texte) ||
      validator.isEmpty(duration) ||
      validator.isEmpty(price) 
    
    )
      return res.status(401).json({
        message: `Veuillez remplir touts les champs`,
      });
  
    try {
    
        const newDestination = new Destination({
         destination,titre,price,duration,texte
        });
  
        await newDestination.save();
  
     
        return res.status(201).json({
          message: `Destination enrégistré`,
        
      });
    } catch (error) {
      res.status(403).json({
        message: `Erreur interne du serveur, veuillez réessayer plus tard`,
      }); 
    }
  });



  //Récuperer les destinations
module.exports.get_all_destination = async_handler(async (req, res) => {
    try {
      const destinations = await Destination.find().sort({ createdAt: -1 });
      res.send(destinations);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      return res.status(500).json({
        message: `Vous ne pouvez pas récupérer les données des destinations`,
      });
    }
  });

  module.exports.updateDestination = async_handler(async (req, res) => {
    const {
     duration,price,texte,titre
    } = req.body;
  
    if (!ObjectdId.isValid(req.params.id))
      return res.status(404).send({ message: `Destination inconnu` });
  
    if (
      validator.isEmpty(price) ||
      validator.isEmpty(duration) ||
      validator.isEmpty(texte) ||
      validator.isEmpty(titre) 
    
    )
      return res.status(401).json({
        message: `Veuillez remplir tous les champs`,
      });
  
  
  
    try {
      // Vérifier si l'id existe
      let user = await Destination.findById(req.params.id);
      if (!user)
        return res.status(403).json({ message: `L'id n'existe pas` });
  
   
      // Mettre à jour les informations dans la base de données
      user.titre = titre;
      user.texte = texte;
      user.price = price;
      user.duration = duration;
      
      await user.save();
  
      return res.status(201).json({
        message: "Les informations du destination sont mises à jour",
  
      });
    } catch (error) {
      return res.status(500).json({
        message: `Erreur interne du serveur, veuillez réessayer plus tard : ${error}`,
      });
    }
  });


  module.exports.deleteDestination = async_handler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const destination = await Destination.findByIdAndDelete(id);
      if (!destination) {
        return res.status(404).json({ message: 'Destination non trouvé' });
      }
      res.json({ message: 'Destination supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression du Destination :', error);
      res.status(500).json({ message: 'Erreur lors de la suppression du Destination' });
    }
  });
