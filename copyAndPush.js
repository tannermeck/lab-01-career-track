const copyAndPush = (array, number) => {
  const arr = [...array];
  const newArray = arr.push(number);
  console.log(arr);
  return arr;
};
export default copyAndPush;
