import { dark } from './dark';
import { light } from './light';

export type ThemeOptions = 'dark' | 'light';

export type ThemeType = {
  colors: {
    primaryButton: {
      default: string;
      hover: string;
      active: string;
      disabled: string;
    };

    secondaryButton: {
      default: string;
      hover: string;
      active: string;
      disabled: string;
    };

    buttonText: {
      default: string;
      disabled: string;
    };

    progressBar: {
      progress: string;
      border: string;
    };

    movieCard: {
      title: string;
      description: string;
    };

    input: {
      background: string;
      border: string;
      borderFocus: string;
      placeholder: string;
    };

    skeleton: string;

    background: string;
    backgroundCard: string;
    backgroundTag: string;
    backgroundMovieList: string;

    border: string;

    text1: string;
    text2: string;
    text3: string;
    text4: string;
  };
};

export default { dark, light };
