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
  switch(country){
    case 'Algérie':
  return "+213";
    case 'Angola':
  return "+244";
    case 'Bénin':
  return "+229";
    case 'Botswana':
  return "+267";
    case 'Burkina Faso':
  return "+226";
    case 'Burundi':
  return "+257";
    case 'Cameroun':
  return "+237";
    case 'Cap-Vert':
  return "+238";
    case 'Republique Centrafricaine':
  return "+236";
    case 'Tchad':
  return "+235";
    case 'Comores':
  return "+269";
    case 'Congo':
  return "+242";
    case 'République Démocratique Du Congo':
  return "+243";
    case 'Djibouti':
  return "+253";
    case 'Égypte':
  return "+20";
    case 'Guinée Équatoriale':
  return "+240";
    case 'Érythrée':
  return "+291";
    case 'Éthiopie':
  return "+251";
    case 'Gabon':
  return "+241";
    case 'Gambie':
  return "+220";
    case'Guinée':
  return "+224";
    case 'Guinée-Bissau':
  return "+245";
    case"Côte d'Ivoire":
  return "+225";
    case 'Kenya':
  return "+254";
    case 'Lesotho':
  return "+266";
    case 'Libye':
  return "+218";
    case 'Liberia':
  return "+231";
    case 'Madagascar':
  return "+261";
    case 'Malawi':
  return "+265";
    case 'Mali':
  return "+223";
    case 'Mauritanie':
  return "+222";
    case 'Maurice':
  return "+230";
    case 'Maroc':
  return "+212";
    case 'Mozambique':
  return "+258";
    case 'Namibie':
  return "+264";
    case 'Niger':
  return "+227";
    case 'Nigeria':
  return "+234";
    case 'Rwanda':
  return "+250";
    case 'Sao Tomé-et-Principe':
  return "+239";
    case 'Sénégal':
  return "+221";
    case 'Seychelles':
  return "+248";
    case 'Sierra Leone':
  return "+232";
    case 'Somalie':
  return "+252";
    case 'Afrique Du Sud':
  return "+27";
    case 'Soudan Du Sud':
  return "+211";
    case 'Swaziland':
  return "+268";
    case 'Soudan':
  return "+249";
    case 'Tanzanie':
  return "+255";
    case 'Togo':
  return "+228";
    case 'Tunisie':
  return "+216";
    case 'Ouganda':
  return "+256";
    case 'Zambie':
  return "+260";
    case 'Zimbabwe':
  return "+263";
  default: return "Indicatif non trouvé" 
  }
};
