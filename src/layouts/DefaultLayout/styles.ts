import styled from 'styled-components';

import hexToRgba from '../../utils/hexToRgba';

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  position: relative;
  grid-template-rows: 80px 1fr 68px;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    height: 35.25rem;
    width: 100%;
    background: linear-gradient(
        to bottom,
        ${props => hexToRgba(props.theme.colors.background, 1)} 0%,
        ${props => hexToRgba(props.theme.colors.background, 0.46)} 49%,
        ${props => hexToRgba(props.theme.colors.background, 1)} 100%
      ),
      url('/cubos-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;
    z-index: -1;
  }

  @media (max-width: 768px) {
    grid-template-rows: 80px 1fr 80px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 85rem;
  margin: 0 auto;
`;
