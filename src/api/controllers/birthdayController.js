const Birthday = require("../models/birthdayModel");
const { DateTime } = require("luxon");

exports.displayTodayBirthday = async (req, res) => {
  try {
    const todayDate = DateTime.local().startOf('day');
    const birtdays= await Birthday.find({ date: { $gte: todayDate, $lt: todayDate.plus({ days: 1 }) } },
    {_id: false, birthdayDate: false, email: false, created_at: false });
    res.status(200).json(birtdays);
  } catch (error) {
    res.status(500).send("Erreur serveur");
    console.log(error);
  }
};

exports.sendMailToday = async (req, res) => {
  try {
    const todayDate = DateTime.local().startOf('day');
    const birtdays= await Birthday.find({ date: { $gte: todayDate, $lt: todayDate.plus({ days: 1 }) } });
    if (birtdays.length > 0) {
      birtdays.forEach((birtdayPerson) => {
        console.log("Mail de l'utilisateur :", birtdayPerson.mail);
        res.status(200).json("mail envoyé");
      });
    } else {
      console.error("Aucun utilisateur trouvé pour la date d'aujourd'hui.");
      return res.status(404).send("Aucun utilisateur trouvé pour la date d'aujourd'hui.");
    }
    
    
  } catch (error) {
    res.status(500).send("Erreur serveur");
    console.log(error);
  }
};
