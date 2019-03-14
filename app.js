const express = require("express");
const app = express();
const catalogRouter = require("./routes/catalogController");
const profileRouter = require("./routes/profileController");
const path = require("path");
const session = require("express-session");
app.use(session({ secret: "Shh, its a secret!" }));
//var favicon = require("serve-favicon");

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
app.use((req, res, next) => {
  req.session.userSavedItems = [];
  next();
});
app.use("/profile", profileRouter);
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", catalogRouter);

app.get("/myItems", (req, res) => {
  console.log("in my items");
  console.log(req.session.user);
  output = [];
  res.render("myItems", { user: req.session.user, output: output });
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/logOut", (req, res) => {
  req.session.destroy;
  res.send("session destory");
});

app.listen(8080, () => {
  "Server running";
});
