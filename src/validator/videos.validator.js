let joi = require("joi");

const Joi = require("joi");

let searchVideos = {
  query: joi.object().keys({
    title: joi.string(),
  }),
};

module.exports = {
  searchVideos,
};
