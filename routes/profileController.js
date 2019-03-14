const express = require("express");
const router = express.Router();
const { categories } = require("../utility/categories");
const Item = require("../models/item");
const User = require("../models/user");
const { getItems } = require("../utility/itemDB");
const { UserItem } = require("../models/userItem");

const { getUsers } = require("../utility/userDB");

router.use("/assets", express.static("assets"));

router.get("/", (req, res) => {
  console.log("index");
  console.log(req.session.user);
  res.render("index");
});

router.get("/signIn", (req, res) => {
  req.session.user = new User(
    getUsers()[1].userId,
    getUsers()[1].firstName,
    getUsers()[1].lastName,
    getUsers()[1].email,
    getUsers()[1].address,
    getUsers()[1].city,
    getUsers()[1].state,
    getUsers()[1].zipCode,
    getUsers()[1].country,
    getUsers()[1].userId
  );
  //-----------------------------------------------------------------------------

  //-----------------------------------------------------------------------------
  console.log(req.session.user.firstName);
  output = [];
  res.render("myItems", { user: req.session.user, output: output });
});

router.get("/myItems", (req, res) => {
  console.log("in my items");
  const UserProfile = require("../models/userProfile");
  if (req.query.addItem !== undefined) {
    let item = getItem(req.query.addItem);
    item = new UserItem(item, 0, false);
    console.log(item);
    UserProfile.addItem(item);
    let output = UserProfile.getItems();
    console.log(output);

    console.log("**********************************************");

    res.render("myItems", { user: req.session.user, output: output });
  } else if (req.query.deleteItem !== undefined) {
    UserProfile.removeItem();
    let output = UserProfile.getItems(req.query.deleteItem);
    console.log(output);

    console.log("**********************************************");

    res.render("myItems", { user: req.session.user, output: output });
  }

  //  req.session.userSavedItems.push(UserProfile.getItems(req.params.itemId));
  //console.log(req.session.userSavedItems);
  console.log("**********************************************");
});

module.exports = router;
