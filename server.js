const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

const routerUploadFile = require("./routers/upload.router");
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/upload", routerUploadFile);

app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...");
});
