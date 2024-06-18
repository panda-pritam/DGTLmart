let {
  getAll,
  getById,
  addVideo,
  updateViewCount,
  updateVoteCount,
} = require("../services/videos.service");
let catchAsync = require("../utils/catchAsync");
let ApiError = require("../utils/ApiError");
let httpStatus = require("http-status");
const { json } = require("express");

let getAllvideos = catchAsync(async (req, res) => {
  try {
    let title = req.query.title ? req.query.title : "";

    let list = await getAll(title);
    if (list.length === 0) {
      return res.status(404).json({ message: "No Videos Found" });
    }
    // req.body({ videos: list });
    let resultObj = {
      videos: list,
    };
    // res.status(200).json({body:resultObj});
    res.body = resultObj;
    res.status(200).send({ videos: list });
    // res.send(resultObj);
    // res.status(httpStatus.OK).json({ videos: list });
  } catch (error) {
    console.log(error);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error."
    );
  }
});

module.exports = {
  getAllvideos,
};
