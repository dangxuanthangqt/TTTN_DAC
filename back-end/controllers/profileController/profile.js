var UserModel = require("../../models/users");

exports.getProfile = async (req, res, next) => {
  var { data } = req.jwtdecode;
  const result = await UserModel.findById(data.id).populate("role");
  if (result) {
  
    return res.send(result);
  } else
    return res.status(404).json({
      message: "404 NOT FOUND",
    });
};
exports.updateProfile = async (req, res, next) => {
  var { data } = req.jwtdecode;

  var dataClient = req.body;
  console.log(dataClient.password.length)
  if (dataClient.password.length > 0) {
    try {
      const result = await UserModel.findOneAndUpdate(
        { _id: data.id },
        {
          first_name: dataClient.first_name,
          last_name: dataClient.last_name,
          company_name: dataClient.company_name,
          password: dataClient.password,
          update_at: Date.now(),
        },
        { new: true }
      );
      return res.send({
        message: "UPDATE SUCCESSFULLY",
        data: result,
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "ERROR 500",
      });
    }
  } else {
    try {
      const result = await UserModel.findByIdAndUpdate(
        data.id,
        {
          first_name: dataClient.first_name,
          last_name: dataClient.last_name,
          company_name: dataClient.company_name,
          update_at: Date.now(),
        },
        { new: true }
      );
      return res.send({
        message: "UPDATE SUCCESSFULLY",
        data: result,
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "ERROR 500",
      });
    }
  }
};
