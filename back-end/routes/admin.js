var express = require("express");
const { isAuth } = require("../controllers/authen/checkToken");
const {
  GetAllUser,
  DeleteUser,
  ChangeStatusUser,
} = require("../controllers/adminController/adminController");

var router = express.Router();

/* GET users listing. */
router.get("/", isAuth, GetAllUser);
router.delete("/users/:id", isAuth, DeleteUser);
router.patch("/users/:id", isAuth, ChangeStatusUser);
module.exports = router;
