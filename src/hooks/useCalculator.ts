import { useEffect, useState } from 'react';
import { Calculator, KeyboardKeys } from '@poncegl/calculator';

export function useCalculator() {
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [currentKey, setCurrentKey] = useState<string>('');

  const pressKey = (key: KeyboardKeys) => {
    setCurrentKey(key);
    Calculator.pressKey(key);
    setResult(Calculator.result);
  };

  useEffect(() => {
    if (history.length !== Calculator.history.length) {
      setHistory([...Calculator.history]);
    }
  }, [currentKey]);

  return {
    pressKey,
    result,
    history,
  };
}
