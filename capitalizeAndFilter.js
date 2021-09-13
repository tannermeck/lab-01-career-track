const capitalizeAndFilter = (array) => {
  const newArray = [];
  for (const item of array){
    if (item.slice(0, 1).toUpperCase() !== 'F'){
      newArray.push(item);
    } 
  } return newArray;
};
export default capitalizeAndFilter;
