import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import { Container } from '../../../src/components/Container';

describe('Container', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Container>
        <Text>Hello</Text>
      </Container>
    );

    const text = getByText('Hello');

    expect(text).toBeDefined();
  });
});
