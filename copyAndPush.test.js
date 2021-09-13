import copyAndPush from './copyAndPush.js';

describe('returns a new array with original array plus a new item on the end', () => {
  it('should return all numbers and a 4 on the end', () => {
    const numbers = [1, 2, 3];
    const newArray = copyAndPush(numbers, 4);  
    expect(newArray).toEqual([1, 2, 3, 4]);
  });
  it('returns the original, unchanged array', () => {
    const numbers = [1, 2, 3];
    const newArray = copyAndPush(numbers, 4); 
    expect(newArray).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});
