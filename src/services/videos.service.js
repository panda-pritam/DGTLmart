let Videos = require("../models/videos.model");

let getAll = async (title) => {
  console.log("videos services ");
  let titleMatcher = { title: { $regex: title, $options: "i" } };

  let list = await Videos.find({ ...titleMatcher });

  console.log("list", list.length);

  return list;
};

module.exports = {
  getAll,
};
