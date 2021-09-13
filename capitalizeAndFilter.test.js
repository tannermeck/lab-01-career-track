import capitalizeAndFilter from './capitalizeAndFilter.js';

describe('takes in an array of strings and filters out strings starting with the letter F/f', () => {
  it('should remove strings starting with the F/f', () => {
    const array = ['leprachaun', 'frog', 'freedom', 'speech'];
    const filter = capitalizeAndFilter(array);
    
    const secondArray = ['frisbee', 'golf', 'longboarding', 'Football'];
    const secondFilter = capitalizeAndFilter(secondArray);

    expect(filter).toEqual(['leprachaun', 'speech']);
    expect(secondFilter).toEqual(['golf', 'longboarding']);
  });
});
