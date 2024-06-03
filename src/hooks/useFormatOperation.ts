import { useEffect, useState } from 'react';
import { formatNumber, Operator } from '@poncegl/calculator';

export function useFormatOperation(operation: string) {
  const [formatText, setFormatText] = useState<string>(operation);
  const containsOperator = (input: string): boolean => {
    const operators = Object.values(Operator);
    return operators.some(operator => input.includes(operator));
  };

  useEffect(() => {
    if (operation === '') {
      setFormatText('0');
    } else {
      if (containsOperator(operation) || operation.includes('Error')) {
        setFormatText(operation);
      } else {
        setFormatText(formatNumber(parseFloat(operation)));
      }
    }
  }, [operation]);

  return { formatText };
}
