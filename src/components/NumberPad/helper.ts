import {
  KeyboardKeys,
  Numbers,
  Operator,
  SpecialKeys,
} from '@poncegl/calculator';

export function getLayout() {
  const customList: KeyboardKeys[] = [
    SpecialKeys.CLEAR,
    SpecialKeys.AMBIGUITY,
    Operator.PERCENTAGE,
    Operator.DIVIDE,
    Numbers.SEVEN,
    Numbers.EIGHT,
    Numbers.NINE,
    Operator.MULTIPLY,
    Numbers.FOUR,
    Numbers.FIVE,
    Numbers.SIX,
    Operator.SUBTRACT,
    Numbers.ONE,
    Numbers.TWO,
    Numbers.THREE,
    Operator.ADD,
    Numbers.ZERO,
    SpecialKeys.DOT,
    Operator.EQUAL,
  ];

  return { KeyboardKeys: customList };
}

export const isNumber = (element: KeyboardKeys) =>
  Object.values(Numbers).includes(element as Numbers);
export const isDot = (element: KeyboardKeys) => element === SpecialKeys.DOT;
