import { ThemeType } from '.';

export const dark: ThemeType = {
  colors: {
    primaryButton: {
      default: '#8E4EC6',
      hover: '#9A5CD0',
      active: '#8457AA',
      disabled: '#6F6D78',
    },

    secondaryButton: {
      default: 'rgba(183, 68, 247, 0.08)',
      hover: 'rgba(193, 80, 255, 0.18)',
      active: 'rgba(180, 18, 249, 0.04)',
      disabled: 'rgba(235, 234, 248, 0.08)',
    },

    progressBar: {
      progress: '#FFE000',
      border: 'rgba(255, 255, 255, 0.27)',
    },

    background: '#121113',
    backgroundCard: 'rgba(35, 34, 37, 0.75)',
    backgroundTag: 'rgba(193, 80, 255, 0.18)',

    border: 'rgba(241, 230, 253, 0.19)',

    text1: '#EEEEF0',
    text2: '#B5B2BC',
    text3: '#FFFFFF',
    text4: '#ECD9FA',
  },
};
