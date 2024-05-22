import { useRef } from 'react';
import { useWindowDimensions } from 'react-native';

export function useButtonWidth() {
  const COLUMNS = 4.1;
  const { width } = useWindowDimensions();
  const buttonWidth = useRef(width / COLUMNS);

  return { buttonWidth: buttonWidth.current };
}
