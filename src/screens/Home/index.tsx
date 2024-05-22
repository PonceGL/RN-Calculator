import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';

export function Home(): JSX.Element {
  const { colors } = useColorTheme();
  return (
    <View style={styles.content}>
      <Text
        style={{
          color: colors.text,
        }}>
        Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    minHeight: 300,
  },
});
