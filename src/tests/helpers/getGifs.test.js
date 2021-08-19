import { getGifs } from '../../helpers/getGifs';

describe('fetch in getGifs', () => {
  test('should be get 10 elements', async () => {
    const gifs = await getGifs('one piece');
    expect(gifs.length).toBe(15);
  });
  test('dont send prop data', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
