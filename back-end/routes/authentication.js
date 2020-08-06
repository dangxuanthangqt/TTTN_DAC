var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/users");
const roleModel = require("../models/roles");
var jwtHelper = require("../Helpers/jwt_helper");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;

router.post("/login", async (req, res, next) => {
  let user = req.body;
  try {
    let checkAcc = await userModel
      .findOne({ account_name: user.account_name })
      .populate("role");
    // console.log(checkAcc);
    if (checkAcc === null) {
      return res.status(404).send({
        message: "Not found account !",
      });
    } else {
      let isMatch = await bcrypt.compare(user.password, checkAcc.password);
      if (isMatch) {
        let dataInToken = {
          _id: checkAcc._id,
          account_name: checkAcc.account_name,
          role: checkAcc.role.name,
        };
        let accessToken = await jwtHelper.generateToken(
          dataInToken,
          accessTokenSecret,
          parseInt(accessTokenLife)
        );
        //console.log(dataInToken);
        return res.status(200).send({
          accessToken: accessToken,
        });
      }else return  res.status(403).send(
        {
          message:"Password error !"
        }
      )
    }
  } catch (E) {
    return es.status(500).send({
      message: "ERROR 500 !",
    });
  }
});
router.post("/register", async (req, res, next) => {
  let user = req.body;
  try {
    let checkEmail = await userModel.findOne({
      $or: [{ email: user.email }, { account_name: user.account_name }],
    });
    if (checkEmail)
      return res.status(403).send({
        message: "Email or account  exist !",
      });

    // const Salt = await bcrypt.genSalt(10);
    // const Hash = await bcrypt.hash(user.password, Salt);
    // user.password = Hash;
    const role_id = await roleModel
      .findOne({ name: user.role_name }, "_id")
      .exec();
    if (role_id === null)
      return res.status(404).send({
        message: "Not found role name !",
      });
    else {
      const userTemp = new userModel({
        ...user,
        role: role_id,
      });
     
      let response = await userTemp.save();
      res.send({
        message: "Register success !",
        data: response,
      });
    }
  } catch (e) {
    console.log(e)
    res.status(500).send({
      message: "ERROR 500",
    });
  }
});
module.exports = router;
