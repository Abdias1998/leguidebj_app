module.exports.formatDate = async (date) => {
  const options = {
    timeZone: "Africa/Porto-Novo", // Fuseau horaire de l'Afrique de l'Ouest (Bénin)
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date.toLocaleString("fr-FR", options);
};

module.exports.setAllMajWords = (toFirstWord, texte) => {
  /*Tranformer chaque début de mot en maj */

  let newText =
    toFirstWord == true ? texte.charAt(0).toUpperCase() : texte.charAt(0);
  for (let i = 0; i < texte.length - 1; i++) {
    if (texte.charAt(i).match(/\s/) && texte.charAt(i + 1).match(/[a-z]/)) {
      newText += texte.charAt(i + 1).toUpperCase();
    } else {
      newText += texte.charAt(i + 1);
    }
  }
  return newText;
};

module.exports.generateCode = () => {
  let code = "";
  for (let i = 0; i < 7 ; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};
module.exports.codeByCountry = (country) => {
  if (country === "Benin") return "+229";
  if (country === "Togo") return "+228";
  if (country === "Ghana") return "+230";
};
