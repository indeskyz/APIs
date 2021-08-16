require("dotenv").config();
const API_ROUTE = process.env.API_ROUTE;
const axios = require("axios");
const sortResults = require("../helpers/sortResults");
const { filterData, filterByID } = require("../helpers/filterResults");

const makeAPIReq = (
  queryParams,
  sortByParam = "id",
  directionParam = "asc"
) => {
  let URLS = [];
  let seperateTags = queryParams.split(",");
  let checkDupes = new Set(seperateTags);
  queryParams.split(",").forEach((tag) => {
    if (checkDupes.size !== queryParams.length) {
      axios.get(`${API_ROUTE}?tag=${tag},${tag}`);
    }
    URLS.push(
      `${API_ROUTE}?tag=${tag}&sortBy=${sortByParam}&direction=${directionParam}`
    );
    console.log(sortByParam);
  });
  return Promise.all(
    URLS.map((url) => {
      console.log(url);
      return axios.get(url).then((resp) => resp.data.posts);
    })
  )
    .then((results) => {
      let MERGED_RESULTS = results.flat();
      let finalResults0 = filterData(MERGED_RESULTS, "id");
      let SORTED_DATA = sortResults(finalResults0, sortByParam, directionParam);
      return SORTED_DATA;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = makeAPIReq;
