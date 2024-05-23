import React from 'react';
import { Text, View } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';
import { useFontSize } from '../../hooks/useFontSize';
import { styles } from './styles';

export function Screen(): JSX.Element {
  const operation = '0234'; // TODO: this should be a external state
  const { colors } = useColorTheme();
  const { size } = useFontSize(operation);
  return (
    <View style={styles.content}>
      <Text
        style={[
          styles.text,
          {
            fontSize: size,
            color: colors.text,
          },
        ]}
      >
        {operation}
      </Text>
    </View>
  );
}
