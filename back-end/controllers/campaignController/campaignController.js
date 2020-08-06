var campaignModel = require("../../models/campaigns");
exports.createCampaign = async (req, res, next) => {
  var user_id = req.jwtdecode.data.id;
  var dataClient = { ...req.body, user_id: user_id };
  var campaign = new campaignModel({
    ...dataClient,
  });
  try {
    const result = await campaign.save();
    return res.send({
      message: "Create successfully",
      data: result,
    });
  } catch (e) {
    return res.status(500).send({
      message: "ERROR 500 !",
    });
  }
};
exports.getCampaignEachUser = async (req, res, next) => {
  var user_id = req.jwtdecode.data.id;

  try {
    const result = await campaignModel
      .find({ user_id: user_id })
      .select(
        "name start_date end_date budget bid_amount title description final_url"
      )
      .exec();
    return res.send({
      message: "Get campaign successfully",
      data: result,
      length: result.length,
    });
  } catch (e) {
    return res.status(500).send({
      message: "ERROR 500",
    });
  }
};
exports.deleteCampaign = async (req, res, nex) => {
  const campaign_id = req.params.id;
  try {
    const result = await campaignModel.findByIdAndDelete(campaign_id).exec();

    return res.send({
      message: "DELETE SUCCESSFULLY !",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "ERROR 500",
    });
  }
};
exports.updateCampaign = async (req, res, next) => {
  const campaign = req.body;
  const campaign_id = req.params.id;
  try {
    const result = await campaignModel
      .findByIdAndUpdate(
        campaign_id,
        {
          name: campaign.name,
          start_date: campaign.start_date,
          end_date: campaign.end_date,
          budget: campaign.budget,
          bid_amount: campaign.bid_amount,
          title: campaign.title,
          description: campaign.description,
          final_url: campaign.final_url,
        },
        { new: true }
      )
      .exec();
    return res.send({
      message: "Update campaign successfully !",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "ERROR 500",
    });
  }
};
