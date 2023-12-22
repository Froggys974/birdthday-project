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
    birthdayDate: {
      type: Date,
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
