var userModel = require("../../models/users");
exports.GetAllUser = async (req, res, next) => {
  try {
    const result = await userModel
      .aggregate([
        {
          $lookup: {
            from: "roles",
            localField: "role",
            foreignField: "_id",
            as: "role",
          },
        },
        {
          $unwind: {
            path: "$role",
          },
        },
        {
          $match: { "role.name": { $ne: "admin" } },
        },
      ])
      .exec();
    return res.send({
      message:
        result.length === 0 ? "List user is empty" : "Get data successfully !",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "ERROR 500!",
    });
  }
};
exports.DeleteUser = async (req, res, next) => {
  const user_id = req.params.id;
  try {
    const result = await userModel.findByIdAndDelete(user_id).exec();
    return res.send({
      message: "Delete user successfully !",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Delete user failure !",
    });
  }
};
exports.ChangeStatusUser = async (req, res, next) => {
  
  const data = req.body;
  try {
    const result = await userModel
      .findByIdAndUpdate(req.params.id, { status: data.status }, { new: true })
      .exec();
    return res.send({
      message: "Change Status successfully !",
      data: result,
    });
  } catch (e) {
    console.log(e)
    return res.status(500).send({
      message: "Change status failure !",
    });
  }
};
