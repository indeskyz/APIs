//Methods used to string formatting if string requirements ever need to be extended

const formatQueryTags = (tags) => {
  if (tags === undefined)
    throw Error(
      `Error, getting values for query tag parameters\n Got: ${tags} for Tag values\nExpected some Values `
    );
  return tags.split(",");
};

const formatQueryString = (queryString) => {
  if (queryString === undefined)
    throw Error(
      `Error, getting values for query string paramters\nGot: ${queryString} for queryString values\nExpected some Values `
    );
  return queryString.toLowerCase();
};

const formatDataToJSON = (dataToFormat) => {
  if (dataToFormat === undefined)
    throw Error(
      `Error, getting values for data to format to JSON\nGot: ${dataToFormat} for data values\nExpected some Values `
    );
  return JSON.stringify(dataToFormat, null, 4);
};

module.exports = {
  formatQueryString,
  formatQueryTags,
  formatDataToJSON,
};
