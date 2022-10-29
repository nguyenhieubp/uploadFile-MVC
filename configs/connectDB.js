const mongoose = require("mongoose");

const connectDB = (req, res) => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("Connected DB"))
    .catch(() => console.log("Not connect"));
};

module.exports = connectDB;
