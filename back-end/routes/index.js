var express = require("express");
const { isAuth } = require("../controllers/authen/checkToken");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController/profile");
const {
  createCampaign,
  getCampaignEachUser,
  deleteCampaign,
  updateCampaign,
} = require("../controllers/campaignController/campaignController");
const {
  createItem,
  getItems,
  getItemsFollowCampain,
  DeleteItemFollowId,
  UpdateItemFollowId,
} = require("../controllers/itemController/itemControlelr");
var router = express.Router();
////-----------------PROFILE

router.get("/api/profile", isAuth, getProfile);
router.patch("/api/update-profile", isAuth, updateProfile);

////////////////////////////////////////////////---------------CAMPAIGNS----------------
router.post("/api/campaign", isAuth, createCampaign);
router.get("/api/campaign", isAuth, getCampaignEachUser);
router.delete("/api/campaign/:id", isAuth, deleteCampaign);
router.patch("/api/campaign/:id", isAuth, updateCampaign);

//-----------------------------------Items----------------

router.post("/api/items", isAuth, createItem);
router.get("/api/items", isAuth, getItems);
router.get("/api/items/campaign/:id", isAuth, getItemsFollowCampain);
router.delete("/api/items/:id", isAuth, DeleteItemFollowId);
router.patch("/api/items", isAuth, UpdateItemFollowId);
module.exports = router;
