import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NumberPad } from '../../components/NumberPad';
import { Screen } from '../../components/Screen';

export function Home(): JSX.Element {
  return (
    <View style={styles.content}>
      <Screen />
      <NumberPad />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
