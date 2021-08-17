require("dotenv").config();
const {
  invalidQueryParam,
  isMissingTagsParam,
  invalidTagsParams,
} = require("../helpers/routeServices/checkIfPathExists");
const checkIfParamIsValid = require("../helpers/validParameters/checkIfParamIsValid");
const postsController = require("../controllers/postsController");

let postsRoute = (req, res) => {
  const { tags, sortBy, direction } = req.query;
  if (!tags) {
    isMissingTagsParam(res);
    return;
  }
  if (!checkIfParamIsValid(tags)) {
    invalidTagsParams(res);
    return;
  }
  if (sortBy && !checkIfParamIsValid(sortBy)) {
    invalidQueryParam(res, "sortBy");
    return;
  }
  if (direction && !checkIfParamIsValid(direction)) {
    invalidQueryParam(res, "direction");
    return;
  }
  postsController(tags, sortBy, direction, res, req);
};

module.exports = postsRoute;
