import { Keyboard, Numbers, Operator, SpecialKeys } from '../../types/Keyborad';

export function getLayout() {
  const customList: Keyboard[] = [
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

export const isNumber = (element: Keyboard) =>
  Object.values(Numbers).includes(element);
export const isDot = (element: Keyboard) => element === SpecialKeys.DOT;
