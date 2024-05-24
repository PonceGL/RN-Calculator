import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';
import { styles } from './styles';

interface HistoryProps {
  history: string[];
}

const History = memo(function HistoryComponent({
  history,
}: HistoryProps): JSX.Element {
  const { colors } = useColorTheme();
  return (
    <View style={styles.content}>
      <FlatList
        data={history.reverse()}
        renderItem={({ item }) => (
          <Text
            key={item}
            style={[
              styles.text,
              {
                color: colors.text,
              },
            ]}
          >
            {item}
          </Text>
        )}
        keyExtractor={item => item}
        inverted={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
});

export { History };
