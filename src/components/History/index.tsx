import React, { memo } from 'react';
import { FlatList, Text } from 'react-native';

import { useColorTheme } from '../../hooks/useColorTheme';
import { styles } from './styles';

interface HistoryProps {
  history: string[];
}

const HistoryComponent = ({ history }: HistoryProps): JSX.Element => {
  const { colors } = useColorTheme();
  return (
    <FlatList
      data={[...history].reverse()}
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
      keyExtractor={(item, index) => `${item}-${index}`}
      inverted={true}
      showsHorizontalScrollIndicator={false}
      bounces={false}
    />
  );
};
const History = memo<HistoryProps>(HistoryComponent);

export { History };
