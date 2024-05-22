import React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from '../../../src/components/Button';
import { Numbers } from '../../../src/types/Keyborad';

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
