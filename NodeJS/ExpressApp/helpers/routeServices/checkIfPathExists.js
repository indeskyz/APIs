const createErrorMessage = require("../userServices/errorMessages");

const invalidQueryParam = (res, queryParam) => {
  res.status(400).json(createErrorMessage(`${queryParam} is invalid`));
  return;
};

const isMissingTagsParam = (res) => {
  res.status(200).json(createErrorMessage("Tags parameter is required"));
};

const invalidTagsParams = (res) => {
  res.status(200).json({ posts: [] });
};

module.exports = {
  invalidQueryParam,
  isMissingTagsParam,
  invalidTagsParams,
};
