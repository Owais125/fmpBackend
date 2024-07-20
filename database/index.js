const mongoose = require("mongoose");

const connect_to_database = async () => {
  mongoose.connect('mongodb://localhost:27017/MobileApp');

  mongoose.connection.on("connected", () => {
    console.log("Mongodb is connected!");
  });

  mongoose.connection.on("error", (err) => {
    console.log("An error occured in database connection!", err);
  });
};

module.exports = { connect_to_database };