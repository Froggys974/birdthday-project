const Birthday = require("../models/birthdayModel");
const { DateTime } = require("luxon");
const nodemailer = require("nodemailer");

const mailAuthor = process.env.GMAIL_USER;
const authorMpd = process.env.GMAIL_PASSWORD;

exports.displayTodayBirthday = async (req, res) => {
  try {
    const todayDate = DateTime.local().startOf("day");
    const birtdays = await Birthday.find(
      { date: { $gte: todayDate, $lt: todayDate.plus({ days: 1 }) } },
      { _id: false, birthdayDate: false, email: false, created_at: false }
    );
    res.status(200).json(birtdays);
  } catch (error) {
    res.status(500).send("Erreur serveur");
    console.log(error);
  }
};

exports.sendMailToday = async (req, res) => {
  try {
    const todayDate = DateTime.local().startOf("day");
    const birtdays = await Birthday.find({
      date: { $gte: todayDate, $lt: todayDate.plus({ days: 1 }) },
    });
    let nbEmail = 0;
    if (birtdays.length > 0) {
      birtdays.forEach(async (personBirthday) => {
        // Configurer le transporteur SMTP (exemple avec Gmail)
        const transporteur = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: mailAuthor,
            pass: authorMpd,
          },
        });

        // Configuration du message d'e-mail
        const message = {
          from: mailAuthor, // Votre adresse Gmail
          to: personBirthday.email, //
          subject: "Joyeux anniversaire!",
          text: "Joyeux anniversaire!",
        };

        // Envoi de l'e-mail
        const infoEnvoi = await transporteur.sendMail(message);
        console.log("E-mail envoyé avec succès :", infoEnvoi);
        nbEmail++;
      });

      res
        .status(201)
        .json({ message: `Au total, nous avons envoyé ${nbEmail} mail` });
    }
    else{
      res
      .status(404)
      .json({ erreur: "Aucun anniversaire aujourd'hui" });
    }
  } catch (error) {
    console.error(
      "Erreur lors de l'envoi des e-mails d'anniversaire :",
      error
    );
    res
      .status(500)
      .json({ erreur: "Erreur lors de l'envoi des e-mails d'anniversaire" });
  }
};
