import React from 'react';
import { ColorValue, Pressable, Text } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';
import { Keyboard } from '../../types/Keyborad';
import { getWidth } from './helper';
import { styles } from './styles';

interface ButtonProps {
  keyboardKey: Keyboard;
  pressKey: (keyboardKey: Keyboard) => void;
  width?: number;
  textColor?: ColorValue;
  backgroundColor?: ColorValue;
  isLarge?: boolean;
  isVertical?: boolean;
}

export function Button({
  keyboardKey,
  pressKey,
  width,
  textColor,
  backgroundColor,
  isLarge,
  isVertical,
}: ButtonProps): JSX.Element {
  const { colors } = useColorTheme();

  return (
    <Pressable
      style={[
        styles.button,
        {
          width: getWidth({ width, isLarge }),
          height: getWidth({ width, isLarge: isVertical }),
          backgroundColor: backgroundColor ?? colors.neutral_500,
        },
      ]}
      onPress={() => pressKey(keyboardKey)}
    >
      <Text style={[styles.text, { color: textColor ?? colors.text }]}>
        {keyboardKey}
      </Text>
    </Pressable>
  );
}
