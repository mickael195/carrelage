const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

// Initialisation de l'application
const app = express();
const PORT = process.env.PORT || 3008;

// Configuration du moteur de template EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Routes
const mainRoutes = require("./routes/main");
const contactRoutes = require("./routes/contact");

app.use("/", mainRoutes);
app.use("/contact", contactRoutes);

// Middleware pour gérer les erreurs 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page non trouvée" });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
