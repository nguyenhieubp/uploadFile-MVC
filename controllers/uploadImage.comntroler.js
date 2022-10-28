const fs = require("fs");
let imagesJSON = fs.readFileSync("./data.json");
let images = JSON.parse(imagesJSON);

module.exports.single = async (req, res) => {
  try {
    const payload = {
      avatar: `/uploads/${req.file.filename}`,
    };
    images.push(payload);
    let data = images;
    fs.writeFileSync("./data.json", JSON.stringify(data), "utf8");
    res.redirect("/");
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

module.exports.multiple = (req, res) => {
  console.log(req.files);
};

module.exports.getImages = (req, res) => {
  res.render("listImage", { images });
};
