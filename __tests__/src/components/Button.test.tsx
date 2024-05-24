import React from 'react';
import { Numbers } from '@poncegl/calculator';
import { render } from '@testing-library/react-native';

import { Button } from '../../../src/components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button
        keyboardKey={Numbers.ZERO}
        pressKey={pressKey => console.log('pressKey => ', pressKey)}
      />
    );

    const text = getByText('0');

    expect(text).toBeDefined();
  });
});
