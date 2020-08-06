var mongoose = require("mongoose");

var campaignSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  name: String,
  start_date: Date,
  end_date: Date,
  budget: Number,
  bid_amount: Number,
  title: String,
  description: String,
  final_url: String,
});
module.exports = mongoose.model("campaigns", campaignSchema);
