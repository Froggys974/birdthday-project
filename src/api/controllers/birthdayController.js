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
