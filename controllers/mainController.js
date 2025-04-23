exports.getHomePage = (req, res) => {
  res.render("home", {
    title: "Accueil - Regis Drouin Carreleur à Nantes",
    description:
      "Bienvenue chez Regis Drouin, carreleur professionnel à Nantes",
  });
};

exports.getCarrelagePage = (req, res) => {
  res.render("carrelage", {
    title: "Nos Services - Regis Drouin Carreleur",
    description: "Découvrez nos services de pose de carrelage",
  });
};

exports.getSalleDeBainPage = (req, res) => {
  res.render("salle-de-bains", {
    title: "Nos Réalisations - Regis Drouin Carreleur",
    description: "Galerie de nos travaux de carrelage",
  });
};

exports.getTerreCuite = (req, res) => {
  res.render("terre-cuite", {
    title: "Nos Réalisations - Regis Drouin Carreleur",
    description: "Galerie de nos travaux de carrelage",
  });
};

exports.getTerrassePage = (req, res) => {
  res.render("terrasse", {
    title: "À Propos - Regis Drouin Carreleur",
    description: "Découvrez notre entreprise de carrelage et notre histoire",
  });
};

exports.getRealisationPage = (req,res)=>{
  res.render("realisation",{
    title: "Nos Réalisations - Regis Drouin Carreleur",
    description: "Galerie de nos travaux de carrelage",
  })
};