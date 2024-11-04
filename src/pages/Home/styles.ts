import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 1.5rem;

  header,
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;

    header,
    footer {
      padding: 1rem;
    }
  }
`;

export const Form = styled.form`
  width: 30.5rem;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  list-style: none;
  background: ${props => props.theme.colors.backgroundMovieList};
  border-radius: 4px;
  padding: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
    gap: 1rem;
    padding: 1rem;
    background: ${props => props.theme.colors.backgroundCard};
  }
`;
