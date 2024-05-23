import { Dimensions } from 'react-native';
import { renderHook } from '@testing-library/react-hooks';

import { useFontSize } from '../../../src/hooks/useFontSize';

describe('useFontSize', () => {
  it('should return default size', () => {
    const operation = '023456';
    jest
      .spyOn(Dimensions, 'get')
      .mockReturnValue({ width: 393, height: 818, scale: 2, fontScale: 2 });
    const { result } = renderHook(() => useFontSize(operation));
    expect(result.current.size).toBe(50);
  });

  it('should return medium size', () => {
    const operation = '0234567890234';
    jest
      .spyOn(Dimensions, 'get')
      .mockReturnValue({ width: 393, height: 818, scale: 2, fontScale: 2 });
    const { result } = renderHook(() => useFontSize(operation));
    expect(result.current.size).toBe(40);
  });

  it('should return small size', () => {
    const operation = '0234567890234567';
    jest
      .spyOn(Dimensions, 'get')
      .mockReturnValue({ width: 393, height: 818, scale: 2, fontScale: 2 });
    const { result } = renderHook(() => useFontSize(operation));
    expect(result.current.size).toBe(30);
  });
});
