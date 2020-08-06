var express = require("express");
require("dotenv").config();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authenticationRouter = require("./routes/authentication");
var adminRouter = require("./routes/admin");

var app = express();
//------------- cors-------------
app.use(cors());
//--------------
//-------connect mongoDB--------------
var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://thang:thang@cluster0-q8vge.mongodb.net/TTTN?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(Error, err.message);
  });
//-----------------------
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/authen", authenticationRouter);
app.use("/api/admin", adminRouter);

module.exports = app;
