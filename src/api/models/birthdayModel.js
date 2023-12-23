const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let birthdaySchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    birthdate: {
      type: String, //pas Date car format DD/MM/YYYY dans la base de donnée et complexe a traiter
      required: "La date d'anniversaire est requise",
    },
    email: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Birthday", birthdaySchema);
