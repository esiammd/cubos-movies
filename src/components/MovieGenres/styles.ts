import styled from 'styled-components';
import hexToRgba from '../../utils/hexToRgba';

export const MovieGenresContent = styled.div`
  background: ${props => hexToRgba(props.theme.colors.backgroundCard, 0.6)};
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;

  strong {
    color: ${props => props.theme.colors.text2};
    font-size: 0.875rem;
  }
`;

export const GenereTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Tag = styled.span`
  background: ${props => props.theme.colors.backgroundTag};
  border-radius: 2px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text4};
`;
