import { ColorsTheme } from '../types/Theme';

const BaseColors = {
  info_600: '#BDF249',
  info_300: '#BED95B',
  info_50: '#DFFF6B',
  success_600: '#03DD00',
  success_300: '#40F45D',
  success_50: '#97FF96',
  warning_600: '#FB8C00',
  warning_300: '#FFB74D',
  warning_50: '#FFF3E0',
  error_500: '#EA2925',
  error_300: '#E57373',
  error_50: '#FFEBEE',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#595959',
};

export const LightColors: ColorsTheme = {
  primary_600: '#1B64AD',
  primary_300: '#2E5798',
  primary_50: '#7491BA',
  text: '#1C1C1C',
  text_light: '#F4F4F4',
  neutral_600: '#F3F3F3',
  neutral_300: '#F6F6F6',
  neutral_500: '#FEFEFE',
  ...BaseColors,
};

export const DarkColors: ColorsTheme = {
  primary_600: '#1B64AD',
  primary_300: '#2E5798',
  primary_50: '#7491BA',
  text: '#F2F2F2',
  text_light: '#F4F4F4',
  neutral_600: '#222',
  neutral_300: '#2E3235',
  neutral_500: '#464848',
  ...BaseColors,
};
