const validParams = require("../validParameters");
const { isObject, doesKeyAlreadyExist } = require("./supportFunctions");

const addParamToValidParams = (
  keyToAdd,
  valueToAdd,
  validParamsObject = validParams
) => {
  if (isObject(validParamsObject) && doesKeyAlreadyExist(keyToAdd)) {
    let newTag = { [keyToAdd]: valueToAdd };
    validTagsObject = { ...validParamsObject, ...newTag };
  }
};

module.exports = addParamToValidParams;
