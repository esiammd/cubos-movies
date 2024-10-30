import styled from 'styled-components';

export const MovieTrailerContent = styled.div`
  color: ${props => props.theme.colors.text3};
  padding: 0 2rem;

  iframe {
    width: 100%;
    height: 40rem;
    margin-top: 1rem;
    border: 0;
  }

  @media (max-width: 768px) {
    padding: 0rem;

    iframe {
      height: 12rem;
    }
  }
`;
