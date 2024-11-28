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

    buttonText: {
      default: '#FFFFFF',
      disabled: 'rgba(234, 230, 253, 0.43)',
    },

    progressBar: {
      progress: '#FFE000',
      border: 'rgba(255, 255, 255, 0.27)',
    },

    movieCard: {
      title: '#EEEEEE',
      description: '#B4B4B4',
    },

    input: {
      background: '#1A191B',
      border: '#49474E',
      borderFocus: '#8E4EC6',
      placeholder: '#6F6D78',
    },

    skeleton:
      'linear-gradient(to right, #444444 25%, #666666 50%, #444444 75%)',

    background: '#121113',
    backgroundCard: '#232225',
    backgroundTag: 'rgba(193, 80, 255, 0.18)',
    backgroundMovieList: 'rgba(235, 234, 248, 0.08)',

    border: 'rgba(241, 230, 253, 0.19)',

    text1: '#EEEEF0',
    text2: '#B5B2BC',
    text3: '#FFFFFF',
    text4: '#ECD9FA',
  },
};
