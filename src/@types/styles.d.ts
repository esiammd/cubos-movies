/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { ThemeType } from '../styles/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
