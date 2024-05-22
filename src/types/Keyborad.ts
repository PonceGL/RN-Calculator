export enum Numbers {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
}

export enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = 'x',
  DIVIDE = '÷',
  PERCENTAGE = '%',
  EQUAL = '=',
}

export enum SpecialKeys {
  CLEAR = 'AC',
  DELETE = 'del',
  TRASH = 'TRASH',
  MENU = 'MENU',
  AMBIGUITY = '+/-',
  DOT = '.',
}

export type Keyboard = Numbers | Operator | SpecialKeys;
