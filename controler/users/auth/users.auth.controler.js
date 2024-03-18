//3-Connexion de l'administrateur
module.exports.login_Admin = async_handler(async (req, res) => {
    const { identifier, password } = req.body;
  
    /*1 - Vérifiez maintenant si les données saisir respecte nos schémas de validation */
    if (!identifier || !password)
      return res
        .status(401)
        .json({ message: `Veuillez remplir toutes les cases.` });
  
    /*2- Récuperer l'email ou le numéro de phone pour se connecter */
    let existingAdmin;
  
    if (validator.isEmail(identifier)) {
      existingAdmin = { email: identifier }; /**Accepte si c'est un email */
    } else if (validator.isMobilePhone(identifier, `any`)) {
      /**Acccepte si c'est un numéro de n'importe quel pays c'est pourquoi on à 'any' comme seconde valeur */
      existingAdmin = { tel: identifier };
    } else
      return res.status(400).json({
        message: `Veuillez saisir un émail ou un numéro de téléphone  valide.`,
      });
    /**Recuperer la valeur qui passe et le rechercher */
    Admin.findOne(existingAdmin)
      .then((user) => {
        if (!user)
          return res.status(401).json({
            message: `Vous n'avez pas de compte admin avec ces informations d'identification, veuillez vous inscrire en premier.`,
          });
        /*Vérifiez si quelqu'un à déja initialisé un changement de mot de passe */
        if (user.reset_password_expires_Admin !== null)
          return res.status(401).json({
            message: `Veuillez changer votre mot de passe pour des raisons de sécurité si vous n'êtes pas l'auteur de la
  
            procédure de changement du mot de passe du ${formatDate(
              user.reset_password_expires_Admin
            )}`,
          });
  
        /* 3 - Décrypter le mot de passe avant de le vérifiez avec celle de la base de donnée qvec bcrypt*/
        const passwordHashed = bcrypt.compareSync(password, user.password);
        if (!passwordHashed) {
          return res.status(401).json({ message: `Mot de passe incorrect.` });
        }
        /**Authentifer l'user dans le cookie avec son id personnel */
        const token = jwt.sign({ id: user._id }, process.env.token_auth_admin, {
          expiresIn: `7d` /**Duréé maximum de vie du token */,
        });
  
        /* 5 - Envoyer la réponse dans le cookie */
  
        res.cookie(String("leguidebj_admin"), token, {
          path: `/`, // Path cookie
          expires: new Date(
            Date.now() + 24 * 60 * 60 * 1000 * 7
          ) /**Durée de vie du cookie qui est de 7 jours */,
          // httpOnly: true, //Only server
          // sameSite: `lax`, //cross site, empêcher les réquêtes d'autres domaines
          // secure: true, // https
        });
  
        /**Réponse finale quand il est authentifié */
        return res.status(200).json({ message: `Connection réussie` });
      })
      .catch((err) => {
        return res.status(500).send({
          message: `Erreur interne du serveur, veuillez réessayez plus tard ! ${err}`,
        });
      });
  });
  

  
// 4-Procedure du changement du mot de passe
module.exports.forget_password_admin = async_handler(async (req, res) => {
    const { email } = req.body;
    let existingAdmin;
    /**Vérifez si c'est un email ou un si il est vide */
    if (!validator.isEmail(email) || validator.isEmpty(email))
      return res.status(401).json({ message: `Saisissez un adress mail valide` });
  
    /**Rechercher l'utilisateur dans la base de donnée */
    try {
      existingAdmin = await Admin.findOne({
        email: email,
      });
    } catch (error) {
      res.status(500).json({
        message: `Erreur interne du serveur,veuillez reprendre l'opération du changement du mot de passe ${error}`,
      });
    }
    if (!existingAdmin)
      return res.status(401).json({
        message: `Un compte admin avec ce mail n'existe pas,veuillez vous inscrire d'abord si vous disposer pas d'un compte`,
      });
    /**Rnvoyer un token dans url avec les l'identifiant de l'utilisateur qui expire dans aprés 24 heure */
    const resetToken = jwt.sign(
      { _id: existingAdmin._id },
      process.env.forget_password_admin_key,
      {
        expiresIn: 3600 * 24, // Expire après 24h
      }
    );
    /**Mettre à jour l'objet resetPasswordToken et resetPasswordExpires */
    await existingAdmin.updateOne({
      reset_password_token_Admin: resetToken,
      reset_password_expires_Admin: Date.now() + 3600000 * 24, // Expire après 24h
    });
    try {
      /**L'url à envoyer dans l'email */
      const url = `${process.env.client_url}/reset/${resetToken}`;
      /**Lire notre template avant de l'envoyer par nodemailer */
      fs.readFile("./html/admin/reset_password.html", "utf-8", (err, data) => {
        if (err) {
          return res.status(401).json({ message: err });
        } else {
          const html = data
            .replace(/{name}/g, existingAdmin.name)
            .replace(/{reset_link}/g, url);
  
          sendEmail(
            existingAdmin.email,
            `Réinitialisation de mot de passe`,
            html
          );
        }
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `L'envoi d'email a échoué, veuillez recommencer` });
    }
    /**L'envoi d'email */
    const threeFirstWord = existingAdmin.email;
    res.status(200).json({
      message: `Nous venons d'envoyer un lien du changement du mot de passe par e-mail à ${threeFirstWord.substr(
        0,
        8
      )}*****@gmail.com. Vérifiez dans vos Spams si vous ne retrouvez par l'email, ce lien expirera dans les 24h.
       `,
    });
  });
  
  //5-Changement du mot de passe avec un nouveau mot de passe
  module.exports.reset_password_admin = async_handler(async (req, res) => {
    const { newPass } = req.body;
    /**Vérifions si les informations dans notre url est bien celle de l'user ou il n'a pas été cliquer ou s'il a déjà expirer */
    try {
      /**Vérifer les données saisir par l'user */
      if (validator.isEmpty(newPass))
        return res.status(401).json({
          message: `Le champ mot de passe est vide`,
        });
  
      if (!validator.isLength(newPass, { min: 8, max: 30 }))
        return res.status(401).json({
          message: `Votre nouveau mot de passe doit contenir au moins 8 caractères`,
        });
      /**Verifie si le token est celle que nous avons générer avec un key forget_password_key  */
      const decoded = jwt.verify(
        req.params.token,
        process.env.forget_password_admin_key
      );
      const user = await Admin.findById(decoded._id);
      if (!user)
        return res.status(403).json({
          message: `Authentification échoué, veuillez récommencez l'opération du changement du mot de passe.
  `,
        });
      /**Vérifez si le lien à expirer */
  
      if (user.reset_password_expires_Admin < Date.now()) {
        return res.status(403).json({
          message:
            "Le lien de réinitialisation a expiré ou a déjà été cliquer,veuillez récommencez l'opération du changement du mot de passe",
        });
      }
      /**Crypter le nouveau mot de passe en mettant à jour l'objet password, resetPasswordToken et resetPasswordExpires */
      const hashedPassword = bcrypt.hashSync(newPass, 10);
      await user.updateOne({
        reset_password_token_Admin: ``,
        reset_password_expires_Admin: ``,
        password: hashedPassword,
      });
    } catch (error) {
      return res.status(400).json({
        message: `Votre lien de vérification à probablement expirer ou a déjà été cliquer. Veuillez recommencer le processus de changement du mot de passe. ${error}
  `,
      });
    }
    /**Réponse finale  */
    return res.status(200).json({
      message:
        "Votre mot de passe a été changé avec succès. Veuillez-vous connectez à présent avec le nouveau mot de passe.",
    });
  });