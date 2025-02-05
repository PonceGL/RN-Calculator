import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { DarkColors, LightColors } from '../styles/theme';
import { ColorsTheme } from '../types/Theme';

export const useColorTheme = () => {
  const [colors, setColors] = useState<ColorsTheme>(LightColors);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setColors(isDarkMode ? DarkColors : LightColors);
  }, [isDarkMode]);

  return { colors, isDarkMode };
};
