import styled from 'styled-components';

export const LayoutContainer = styled.div`
  height: 100vh;
  position: relative;

  &::before {
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
`;
