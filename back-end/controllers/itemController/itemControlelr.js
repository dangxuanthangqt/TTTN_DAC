var itemModel = require("../../models/items");
var campaignModel = require("../../models/campaigns");
var mongoose = require("mongoose");
exports.createItem = async (req, res, next) => {
  const dataClient = req.body;
  const item = new itemModel({
    ...dataClient,
  });
  try {
    const result = await item.save();
    return res.send({
      message: "Create item successfully !",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Create item failure !",
      messageError: error,
    });
  }
};
exports.getItems = async (req, res, next) => {
  const user_id = req.jwtdecode.data.id;
  try {
    const result = await campaignModel
      .aggregate([
        { $match: { user_id: mongoose.Types.ObjectId(user_id) } },
        {
          $lookup: {
            from: "items",
            localField: "_id",
            foreignField: "campaign_id",
            as: "items",
          },
        },
        {
          $unwind: { path: "$items" },
        },
      ])
      .exec();
    return res.send({
      message: "Get items successfully !",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Get items failure !",
      messageError: error,
    });
  }
};
exports.getItemsFollowCampain = async (req, res, next) => {
  const campaign_id = req.params.id;
  // try {
  //   const result = await itemModel.find({ campaign_id: campaign_id }).exec();
  //   return res.send({
  //     message:
  //       result.length == 0 ? "Item is empty !" : "Get list item successfully !",
  //     data: result,
  //   });
  // } catch (error) {
  //   return res.status(500).send({
  //     message: "Get list item failure!",
  //     messageError: error,
  //   });
  // }
  try {
    const result = await campaignModel
      .aggregate([
        { $match: { _id: mongoose.Types.ObjectId(campaign_id) } },
        {
          $lookup: {
            from: "items",
            localField: "_id",
            foreignField: "campaign_id",
            as: "items",
          },
        },
        { $unwind: "$items" },
      ])
      .exec();
    return res.send({
      message:
        result.length == 0 ? "Item is empty !" : "Get list item successfully !",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Get list item failure!",
      messageError: error,
    });
  }
};
exports.DeleteItemFollowId = async (req, res, next) => {
  const item_id = req.params.id;
  try {
    const result = await itemModel.findByIdAndDelete(item_id).exec();
    return res.send({
      message: "Delete item successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Delete item failure !",
      messageError: error,
    });
  }
};
exports.UpdateItemFollowId = async (req, res, next) => {

  const dataClient = req.body;
  try {
    const result = await itemModel.findByIdAndUpdate(dataClient._id, {
      name: dataClient.name,
      landing_url: dataClient.landing_url,
      landing_domain: dataClient.landing_domain,
    },{new: true}).exec();
    return res.send({
      message: "Update item successfully !",
      data: result
    })
  } catch (error) {
    let temp= error;
    return res.status(500).json({
      message: "Update item failure !",
      messageError: temp
    })
  }
};
