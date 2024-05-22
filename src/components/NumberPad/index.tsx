import React from 'react';
import { View } from 'react-native';

import { useButtonWidth } from '../../hooks/useButtonWidth';
import { useColorTheme } from '../../hooks/useColorTheme';
import { Numbers } from '../../types/Keyborad';
import { Button } from '../Button';
import { getLayout, isDot, isNumber } from './helper';
import { styles } from './styles';

export function NumberPad(): JSX.Element {
  const { buttonWidth } = useButtonWidth();
  const { KeyboardKeys } = getLayout();
  const { colors } = useColorTheme();

  return (
    <View style={styles.content}>
      {KeyboardKeys.map(keyboardKey => (
        <Button
          key={String(keyboardKey)}
          width={buttonWidth}
          isLarge={keyboardKey === Numbers.ZERO}
          keyboardKey={keyboardKey}
          pressKey={pressKey => {
            console.log('====================================');
            console.log('pressKey => ', pressKey);
            console.log('====================================');
          }}
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
