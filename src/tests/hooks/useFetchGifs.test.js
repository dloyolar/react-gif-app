import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('test hook useFetchGifs', () => {
  test('should be return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Haikyuu')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should be return an array of images and loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Haikyuu')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(15);
    expect(loading).toBe(false);
  });
});
