const assertTypeOfParam = (paramToAssert, paramType = "string") => {
  if (typeof paramToAssert === typeof paramType) {
    return true;
  }
  return false;
};

const addParamToValuesArray = (...paramToAdd, paramValues) => {
  if (paramToAdd !== undefined && paramValues !== undefined && assertTypeOfParam(paramToAdd)) {
    paramValues.push(...paramToAdd);
  }
  throw new Error("Please pass an array and make sure that the parameter you wish to add is properly defined");
};

module.exports = {
    assertTypeOfParam,
  addParamToValuesArray
}
