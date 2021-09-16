const capitalizeAndFilter = (array) => {
  const newArray = [];
  array.filter(string => {
    if (string.slice(0, 1).toUpperCase() !== 'F'){
      newArray.push(string.toUpperCase());
    }
  });
  return newArray;
};

export default capitalizeAndFilter;
