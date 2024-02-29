const Guide = require("../../../../model/guide/guide.model");

// Contrôleur pour lire les commentaires des guides

// Contrôleur pour obtenir le nombre total de commentaires pour toutes les vidéos
module.exports.getTotalCommentsForAllGuide = async (req, res) => {
  try {
    const totalComments = await Guide.aggregate([
      {
        $group: {
          _id: null,
          totalComments: { $sum: { $size: "$comments" } },
        },
      },
    ]);

    if (totalComments.length > 0) {
      res.json({ totalComments: totalComments[0].totalComments });
    } else {
      res.json({ totalComments: 0 });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du nombre total de commentaires :",
      error
    );
    res.status(500).json({
      error: "Erreur serveur lors de la récupération des commentaires.",
    });
  }
};
