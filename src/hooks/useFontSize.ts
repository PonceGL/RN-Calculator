import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';

export function useFontSize(text: string) {
  const defaultSize = useRef<number>(50);
  const letterSize = useRef<number>(32);
  const { width } = useWindowDimensions();
  const [currentSize, setCurrentSize] = useState<number>(defaultSize.current);

  useEffect(() => {
    const firsSize = width / text.length < letterSize.current;
    const secondSize = width / text.length < letterSize.current - 6;
    if (firsSize) {
      setCurrentSize(defaultSize.current - 10);
    }
    if (secondSize) {
      setCurrentSize(defaultSize.current - 20);
    }

    if (!firsSize && !secondSize) {
      setCurrentSize(defaultSize.current);
    }
  }, [text]);

  return {
    size: currentSize,
  };
}
