import React from 'react';
import { Text, View } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';
import { useFontSize } from '../../hooks/useFontSize';
import { styles } from './styles';

interface ScreenProps {
  operation: string;
}

export function Screen({ operation }: ScreenProps): JSX.Element {
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
        ellipsizeMode="head"
        numberOfLines={1}
      >
        {operation}
      </Text>
    </View>
  );
}
