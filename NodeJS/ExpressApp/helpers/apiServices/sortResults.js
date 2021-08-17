const sortResults = (resultsToSort, sortByValue, direction) => {
  if (direction === "desc") {
    return resultsToSort.sort((a, b) => b[sortByValue] - a[sortByValue]);
  } else {
    return resultsToSort.sort((a, b) => a[sortByValue] - b[sortByValue]);
  }
};

module.exports = sortResults;
