var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var userSchema = new mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: "roles" },
  password: String,
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    index: true,
    sparse: true,
    lowercase: true,
    trim: true,
  },
  company_name: {
    type: String,
    trim: true,
  },
  status: { type: String, default: "active" },
  account_name: String,
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});
userSchema.pre("findOneAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});
userSchema.pre("save", function (next) {
  var user = this;
 
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});
userSchema.pre("findOneAndUpdate", function (next) {
  var user = this;
 
  // only hash the password if it has been modified (or is new)
  
  if(!user._update.password) return next();
  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user._update.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user._update.password = hash;
      next();
    });
  });
});


module.exports = mongoose.model("users", userSchema);
