import { renderHook } from '@testing-library/react-hooks';

import { useColorTheme } from '../../../src/hooks/useColorTheme';
import { LightColors } from '../../../src/styles/theme';

describe('useColorTheme', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return light palette', () => {
    const { result } = renderHook(() => useColorTheme());
    expect(result.current.colors).toEqual(LightColors);
  });

  it('should return isDarkMode like false', () => {
    const { result } = renderHook(() => useColorTheme());
    expect(result.current.isDarkMode).toEqual(false);
  });
});
