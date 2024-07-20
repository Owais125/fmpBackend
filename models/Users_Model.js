const mongoose = require("mongoose");

// Defining the schema for the Users model
const Users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  login_count: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Creating the Users model from the schema
const Users_Schema = mongoose.model("users", Users);

// Exporting the Users model
module.exports = { Users_Schema };