import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NumberPad } from '../../components/NumberPad';

export function Home(): JSX.Element {
  return (
    <View style={styles.content}>
      <NumberPad />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
