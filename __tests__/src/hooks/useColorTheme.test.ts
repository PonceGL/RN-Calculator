import { renderHook } from '@testing-library/react-hooks';

import { useColorTheme } from '../../../src/hooks/useColorTheme';

describe('useColorTheme', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const palette = {
    primary_600: '#C6CFFF',
    primary_300: '#E8D3FF',
    primary_50: '#DEECFF',
    text: '#1C1C1C',
    text_light: '#F4F4F4',
    neutral_600: '#F8FCFB',
    neutral_300: '#F6F6F6',
    neutral_500: '#D6E4F0',
    info_600: '#BDF249',
    info_300: '#BED95B',
    info_50: '#DFFF6B',
    success_600: '#03DD00',
    success_300: '#40F45D',
    success_50: '#97FF96',
    warning_600: '#FB8C00',
    warning_300: '#FFB74D',
    warning_50: '#FFF3E0',
    error_500: '#EA2925',
    error_300: '#E57373',
    error_50: '#FFEBEE',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#595959',
  };

  it('should return light palette', () => {
    const { result } = renderHook(() => useColorTheme());
    expect(result.current.colors).toEqual(palette);
  });

  it('should return isDarkMode like false', () => {
    const { result } = renderHook(() => useColorTheme());
    expect(result.current.isDarkMode).toEqual(false);
  });
});
