import styled, { css } from 'styled-components';

import hexToRgba from '../../utils/hexToRgba';

interface CardInfoContentProps {
  $ratingMetric: boolean;
}

export const CardInfoContent = styled.div<CardInfoContentProps>`
  flex: 1;

  background: ${props => hexToRgba(props.theme.colors.backgroundCard, 0.75)};
  border-radius: 4px;
  padding: 1rem;

  strong {
    color: ${props => props.theme.colors.text2};
    font-size: 0.75rem;
  }

  p {
    margin-top: 0.5rem;
    font-weight: bold;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    p {
      ${props =>
        props.$ratingMetric === false &&
        css`
          font-weight: normal;
        `}
    }
  }
`;
