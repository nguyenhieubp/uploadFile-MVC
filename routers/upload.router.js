const express = require("express");
const uploadStorage = require("../middlewares/multer");
const router = express.Router();
const controllerUpload = require("../controllers/uploadImage.comntroler");

router.get("/", (req, res) => {
  res.render("upload");
});

router.post("/single", uploadStorage.single("image"), controllerUpload.single);
router.post(
  "/multiple",
  uploadStorage.array("images", 10),
  controllerUpload.multiple
);
router.get("/show", controllerUpload.getImages);

module.exports = router;
