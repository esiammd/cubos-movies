import { dark } from './dark';
import { light } from './light';

export type ThemeOptions = 'dark' | 'light';

export type ThemeType = {
  colors: {
    primaryButton: string;
    primaryButtonHover: string;
    primaryButtonActive: string;
    primaryButtonDisabled: string;

    secondaryButton: string;
    secondaryButtonHover: string;
    secondaryButtonActive: string;
    secondaryButtonDisabled: string;

    white: string;
    yellow: string;
    background: string;
    border: string;

    text: string;
    textFooter: string;
  };
};

export default { dark, light };
