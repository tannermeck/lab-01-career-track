import getName from './getName.js';

describe('getName returns the value of the object key name', () => {
  it('grabs the name spot when the object is called', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    
    expect(name).toEqual('spot');
  });
});
