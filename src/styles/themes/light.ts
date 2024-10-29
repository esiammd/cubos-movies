import { ThemeType } from '.';

export const light: ThemeType = {
  colors: {
    primaryButton: {
      default: '#8E4EC6',
      hover: '#8347B9',
      active: '#BE93E4',
      disabled: '#8E8C99',
    },

    secondaryButton: {
      default: 'rgba(183, 68, 247, 0.08)',
      hover: 'rgba(193, 80, 255, 0.18)',
      active: 'rgba(180, 18, 249, 0.04)',
      disabled: 'rgba(235, 234, 248, 0.08)',
    },

    progressBar: {
      progress: '#B91165',
      border: 'rgba(0, 0, 0, 0.27)',
    },

    background: '#FDFCFD',
    backgroundCard: 'rgba(242, 239, 243, 0.75)',
    backgroundTag: 'rgba(142, 0, 241, 0.18)',

    border: 'rgba(20, 0, 53, 0.19)',

    text1: '#211F26',
    text2: '#65636D',
    text3: '#000000',
    text4: '#402060',
  },
};
