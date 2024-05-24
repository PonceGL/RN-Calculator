import React from 'react';
import { StyleSheet, View } from 'react-native';

import { History } from '../../components/History';
import { NumberPad } from '../../components/NumberPad';
import { Screen } from '../../components/Screen';
import { useCalculator } from '../../hooks/useCalculator';

export function Home(): JSX.Element {
  const { result, history, pressKey } = useCalculator();
  return (
    <View style={styles.content}>
      <History history={history} />
      <Screen operation={result} />
      <NumberPad onPress={pressKey} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
