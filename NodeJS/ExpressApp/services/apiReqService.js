require("dotenv").config();
const API_ROUTE = process.env.API_ROUTE;
const axios = require("axios");
const sortResults = require("../helpers/apiServices/sortResults");
const { filterData } = require("../helpers/apiServices/filterResults");

const apiService = (
  queryParams,
  sortByParam = "id",
  directionParam = "asc"
) => {
  let URLS = [];
  queryParams.split(",").forEach((tag) => {
    URLS.push(
      `${API_ROUTE}?tag=${tag}&sortBy=${sortByParam}&direction=${directionParam}`
    );
  });
  return Promise.all(
    URLS.map((url) => {
      return axios.get(url).then((resp) => resp.data.posts);
    })
  )
    .then((results) => {
      let MERGED_RESULTS = results.flat();
      let finalResults = filterData(MERGED_RESULTS, "id");
      let SORTED_DATA = sortResults(finalResults, sortByParam, directionParam);
      return SORTED_DATA;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = apiService;
