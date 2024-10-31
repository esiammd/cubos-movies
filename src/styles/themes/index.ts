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

    progressBar: {
      progress: string;
      border: string;
    };

    movieCard: {
      background: string;
      title: string;
      description: string;
    };

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
