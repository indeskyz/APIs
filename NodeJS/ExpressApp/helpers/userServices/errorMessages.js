const createErrorMessage = (message = "invlaid parameter") => {
  let errorMSG = {
    error: `${message}`,
  };
  return errorMSG;
};

module.exports = createErrorMessage;
