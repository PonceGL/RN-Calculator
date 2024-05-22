/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import { useColorTheme } from './src/hooks/useColorTheme';

function App(): React.JSX.Element {
  const { colors } = useColorTheme();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.neutral_600,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.neutral_600}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: colors.neutral_600,
        }}>
        <Header />
        <View
          style={{
            backgroundColor: colors.neutral_600,
          }}>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: colors.text,
              },
            ]}>
            Color Theme
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
