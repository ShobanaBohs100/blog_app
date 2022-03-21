const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbURI, {
      useNewUrlParser: true,
    });
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Could not connect to the database. Error...", error);
    process.exit();
  }
};
exports.connectDB = connectDB;
