import styled from 'styled-components';

export const MovieTitleContent = styled.div`
  color: ${props => props.theme.colors.text1};
`;

export const Title = styled.h1`
  font-weight: 600;
`;

export const OriginalTitle = styled.p`
  color: ${props => props.theme.colors.text2};
`;

export const Tagline = styled.p`
  font-style: italic;
`;
