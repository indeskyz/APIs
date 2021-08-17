const createErrorMessage = (invalidParam, message = "invalid parameter") => {
  let errorMSG = {
    error: `${invalidParam} ${message}`,
  };
  return errorMSG;
};

module.exports = createErrorMessage;
