import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';

export function Container({ children }: PropsWithChildren): JSX.Element {
  const { colors, isDarkMode } = useColorTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.neutral_600,
      }}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.neutral_600}
      />
      {children}
    </SafeAreaView>
  );
}
