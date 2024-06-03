import React from 'react';
import { Text, View } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';
import { useFontSize } from '../../hooks/useFontSize';
import { useFormatOperation } from '../../hooks/useFormatOperation';
import { styles } from './styles';

interface ScreenProps {
  operation: string;
}

export function Screen({ operation }: ScreenProps): JSX.Element {
  const { colors } = useColorTheme();
  const { size } = useFontSize(operation);
  const { formatText } = useFormatOperation(operation);

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
        {formatText}
      </Text>
    </View>
  );
}
