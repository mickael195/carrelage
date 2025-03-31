const nodemailer = require("nodemailer");

exports.getContactPage = (req, res) => {
  res.render("contact", {
    title: "Contact - Regis Drouin Carreleur",
    description: "Contactez Regis Drouin, carreleur à Nantes",
    message: null,
    error: null,
  });
};

exports.sendContactForm = async (req, res) => {
  try {
    const { nom, email, telephone, message } = req.body;

    // Validation basique
    if (!nom || !email || !message) {
      return res.render("contact", {
        title: "Contact - Regis Drouin Carreleur",
        description: "Contactez Regis Drouin, carreleur à Nantes",
        message: null,
        error: "Veuillez remplir tous les champs obligatoires",
      });
    }

    // Configuration du transporteur d'email (à remplacer par vos informations)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "votre-email@gmail.com",
        pass: process.env.EMAIL_PASS || "votre-mot-de-passe",
      },
    });

    // Options de l'email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECIPIENT || "contact@regisdrouin.fr",
      subject: "Nouveau message du site web",
      text: `Nom: ${nom}\nEmail: ${email}\nTéléphone: ${
        telephone || "Non renseigné"
      }\nMessage: ${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    res.render("contact", {
      title: "Contact - Regis Drouin Carreleur",
      description: "Contactez Regis Drouin, carreleur à Nantes",
      message: "Votre message a été envoyé avec succès !",
      error: null,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    res.render("contact", {
      title: "Contact - Regis Drouin Carreleur",
      description: "Contactez Regis Drouin, carreleur à Nantes",
      message: null,
      error:
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
    });
  }
};
