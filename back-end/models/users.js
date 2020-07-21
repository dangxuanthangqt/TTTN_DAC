var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: "roles" },
  password : String,
  email: String,
  company_name: String,
  status: {type: String, default:"active"},
  account_name: String,
  create_at: { type: Date, default: Date.now,  },
});
module.exports = mongoose.model("users", userSchema);
