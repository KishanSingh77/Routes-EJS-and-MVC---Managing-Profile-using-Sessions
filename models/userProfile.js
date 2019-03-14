const { getItem } = require("../utility/itemDB");
const { UserItem } = require("./userItem");

var userID = function() {};
let userItems = [];

//complete these functions
addItem = UserItem => {
  console.log("*****************addItem***************");
  console.log("***************userItem in add item**********************");
  console.log(UserItem);

  let flag = 0;
  for (let i = 0; i < userItems.length; i++) {
    if (userItems[i].item.itemCode === UserItem.item.itemCode) {
      console.log("************************ITEM EXISTS");

      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    userItems.push(UserItem);
  }

  console.log("****** userItem Printing");

  console.log(UserItem);
  console.log(" userItem Printing******");

  // if (!userItems.includes(UserItem)) userItems.push(UserItem);
};

removeItem = itemCode => {
  console.log("****** delete item**** ***** ***** ");
  userItems.pop(userItems.find(x => x.item.itemCode === itemCode));
  console.log(userItems);

  // userItems.splice(userItems.indexOf(UserItem.item.itemCode), 1);
};

updateItem = UserItem => {};

getItems = () => {
  console.log("***********************in get items********************");

  return userItems;
};
emptyProfile = () => {
  userItems = [];
};

module.exports.userID = userID;
module.exports = {
  addItem,
  removeItem,
  updateItem,
  getItems,
  emptyProfile
};
