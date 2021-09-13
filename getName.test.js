import getName from './getName.js';

describe('getName returns the value of the object key of name', () => {
  it('grabs the name spot when the object is called', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);   
    expect(name).toEqual('spot');
  });
  it('grabs the name spot when the object is called', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const characterName = getName(character);  
    expect(characterName).toEqual('Aang');
  });
});
