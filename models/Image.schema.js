const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
  url: String,
});

module.exports = mongoose.model("Image", imageSchema);
