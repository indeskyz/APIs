const validParams = require("./validParams");

const checkIfParamIsValid = (tagToVerify, validParamsObject = validParams) => {
  let isTagValid = true;
  let seperateTags = tagToVerify.split(",");
  for (const tag of seperateTags) {
    if (!validParamsObject[`${tag}`]) {
      isTagValid = false;
    }
  }

  return isTagValid;
};

module.exports = checkIfParamIsValid;
