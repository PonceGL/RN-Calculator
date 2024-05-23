import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';
import { styles } from './styles';

export function Container({ children }: PropsWithChildren): JSX.Element {
  const { colors, isDarkMode } = useColorTheme();
  return (
    <SafeAreaView
      style={[
        styles.content,
        {
          backgroundColor: colors.neutral_600,
        },
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.neutral_600}
      />
      {children}
    </SafeAreaView>
  );
}
