import { Dimensions } from 'react-native';
import { renderHook } from '@testing-library/react-hooks';

import { useButtonWidth } from '../../../src/hooks/useButtonWidth';

describe('useButtonWidth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return buttonWidth', () => {
    jest
      .spyOn(Dimensions, 'get')
      .mockReturnValue({ width: 360, height: 818, scale: 2, fontScale: 2 });
    const { result } = renderHook(() => useButtonWidth());
    expect(result.current.buttonWidth).toBe(85.71428571428571);
  });
});
