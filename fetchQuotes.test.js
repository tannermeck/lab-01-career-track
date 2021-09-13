import fetchQuotes from './fetchQuotes.js';


describe('returns an object with a name, text, and image key value pair', () => {
  it('should return a list of quotes in object format with a name, text, and image key value pair', async () => {
    const quote = await fetchQuotes();
    expect(quote).toEqual({
      name: 'Bender',
      text: 'I\'m a fraud. A poor, lazy, sexy fraud.',
      image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    });
  });
});
