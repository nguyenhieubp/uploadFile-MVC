const Image = require("../models/Image.schema");

module.exports.single = async (req, res) => {
  const newImage = new Image({
    url: `/uploads/${req.file.filename}`,
  });
  try {
    newImage.save();
    res.redirect("/");
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

module.exports.deleteImages = async (req, res) => {
  const imageId = req.params.id;
  console.log(imageId);
  await Image.findByIdAndDelete(imageId);
  res.redirect("/");
};
