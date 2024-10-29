import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text1};
    -webkit-font-smoothing: antialiased;
    position: relative;
  }

  body::before {
    content: '';
    position: absolute;
    top: -10%;
    height: 35.25rem;
    width: 100%;
    background: linear-gradient(
        to bottom,
        ${props => props.theme.colors.background}FF 0%,
        ${props => props.theme.colors.background}75 49%,
        ${props => props.theme.colors.background}FF 100%
      ),
      url('/cubos-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;
    z-index: -1;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }    
`;
