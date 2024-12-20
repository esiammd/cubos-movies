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
      disabled: 'rgba(48, 0, 64, 0.18)',
    },

    buttonText: {
      default: '#211F26',
      disabled: 'rgba(33, 31, 38, 0.43)',
    },

    progressBar: {
      progress: '#B91165',
      border: 'rgba(0, 0, 0, 0.27)',
    },

    movieCard: {
      title: '#EEEEEE',
      description: '#B4B4B4',
    },

    input: {
      background: '#FAF9FB',
      border: '#D0CDD7',
      borderFocus: '#8E4EC6',
      placeholder: '#8E8C99',
    },

    skeleton:
      'linear-gradient(to right, #E7D6FB 25%, #EFE3FE 50%, #E7D6FB 75%)',

    background: '#FDFCFD',
    backgroundCard: '#F2eFF3',
    backgroundTag: 'rgba(142, 0, 241, 0.18)',
    backgroundMovieList: 'rgba(48, 0, 64, 0.08)',

    border: 'rgba(20, 0, 53, 0.19)',

    text1: '#211F26',
    text2: '#65636D',
    text3: '#000000',
    text4: '#402060',
  },
};
