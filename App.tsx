/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Container } from './src/components/Container';
import { Home } from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
