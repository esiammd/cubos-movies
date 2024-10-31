import styled from 'styled-components';

import hexToRgba from '../../utils/hexToRgba';

export const RatingScoreContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    background: ${props => hexToRgba(props.theme.colors.background, 0.5)};
    border-radius: 50%;
  }

  circle.background {
    stroke: ${props => props.theme.colors.progressBar.border};
  }

  circle.foreground {
    stroke: ${props => props.theme.colors.progressBar.progress};
  }
`;

export const ScoreValue = styled.div`
  position: absolute;

  strong {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.colors.progressBar.progress};
  }

  span {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.text3};
  }
`;
