let express = require("express");
let router = express.Router();
let {
  postVideos,
  searchVideos,
  updateVote,
  checkID,
} = require("../validator/videos.validator");

let validateReqQuery = require("../middleware/validateReqQuery");

let {
  getAllvideos,
  getVideoById,
  addNewVideo,
  updateView,
  updateVotes,
} = require("../controller/videos.controller");

router.get("/videos", validateReqQuery(searchVideos), getAllvideos);

module.exports = router;
