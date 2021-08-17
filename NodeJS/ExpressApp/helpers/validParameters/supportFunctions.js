const validParams = require("./validParams");

const isObject = (value) => {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
};

const isArray = (a) => {
  return !!a && a.constructor === Array;
};

const checkTypeOf = (itemToCheckTypeof) => {
  return typeof itemToCheckTypeof;
};

const doesKeyAlreadyExist = (
  keyToCheck,
  objectWhereKeyMayExist = validParams
) => {
  if (checkTypeOf(keyToCheck) && !objectWhereKeyMayExist[`${keyToCheck}`]) {
    return true;
  }
  return false;
};

module.exports = {
  isObject,
  isArray,
  checkTypeOf,
  doesKeyAlreadyExist,
};
