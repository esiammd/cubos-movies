import styled from 'styled-components';
import hexToRgba from '../../utils/hexToRgba';

export const MovieSynopsisContent = styled.div`
  background: ${props => hexToRgba(props.theme.colors.backgroundCard, 0.6)};
  border-radius: 4px;
  padding: 1rem;
  width: 26rem;

  strong {
    color: ${props => props.theme.colors.text2};
  }

  p {
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
