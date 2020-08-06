var mongoose = require("mongoose")
var itemSchema = new mongoose.Schema({
  campaign_id: { type: mongoose.Schema.Types.ObjectId, ref: "campaigns" },
  landing_url: String,
  landing_domain: String,
  name: String
});
module.exports = mongoose.model("items", itemSchema);
