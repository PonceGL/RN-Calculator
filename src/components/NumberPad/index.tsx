import React from 'react';
import { View } from 'react-native';
import { KeyboardKeys, Numbers } from '@poncegl/calculator';

import { useButtonWidth } from '../../hooks/useButtonWidth';
import { useColorTheme } from '../../hooks/useColorTheme';
import { Button } from '../Button';
import { getLayout, isDot, isNumber } from './helper';
import { styles } from './styles';

interface NumberPadProps {
  onPress: (keyboardKey: KeyboardKeys) => void;
}

export function NumberPad({ onPress }: NumberPadProps): JSX.Element {
  const { buttonWidth } = useButtonWidth();
  const { KeyboardKeys: keysList } = getLayout();
  const { colors } = useColorTheme();

  return (
    <View style={styles.content}>
      {keysList.map(keyboardKey => (
        <Button
          key={String(keyboardKey)}
          width={buttonWidth}
          isLarge={keyboardKey === Numbers.ZERO}
          keyboardKey={keyboardKey}
          pressKey={pressKey => onPress(pressKey)}
          backgroundColor={
            !isNumber(keyboardKey) && !isDot(keyboardKey)
              ? colors.primary_600
              : colors.neutral_300
          }
        />
      ))}
    </View>
  );
}
