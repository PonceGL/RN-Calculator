import { useEffect, useState } from 'react';
import { Calculator, KeyboardKeys, ObserverProps } from '@poncegl/calculator';

export function useCalculator() {
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

  const serverFunction = ({ result: r, history: h }: ObserverProps) => {
    setResult(r);
    setHistory(h);
  };

  const pressKey = (key: KeyboardKeys) => Calculator.pressKey(key);

  useEffect(() => {
    Calculator.setObserver(serverFunction);
  }, []);

  return {
    pressKey,
    result,
    history,
  };
}
