const filterData = (dataArray, keyToFilterBy) => {
  let uniqueValues = {};
  return dataArray.filter(
    (data) =>
      !uniqueValues[data[keyToFilterBy]] &&
      (uniqueValues[data[keyToFilterBy]] = true)
  );

  //  return Object.values(
  //    dataArray.reduce(
  //      (acc, cur) => Object.assign(acc, { [cur[keyToFilterBy]]: cur }),
  //      {}
  //    )
  //  );
};

const filterByID = (dataArray) => {
  let ids = dataArray.map(({ id }) => id);
  return (filterByIDResults = dataArray.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  ));
};

module.exports = {
  filterData,
  filterByID,
};
