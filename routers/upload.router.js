const express = require("express");
const uploadStorage = require("../middlewares/multer");
const router = express.Router();
const controllerUpload = require("../controllers/uploadImage.comntroler");

router.get("/", (req, res) => {
  res.render("upload");
});
router.post("/deleteImages/:id", controllerUpload.deleteImages);
router.post("/single", uploadStorage.single("image"), controllerUpload.single);

module.exports = router;
