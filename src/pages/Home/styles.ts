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
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const FormHeader = styled.form`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;

  border: 0;
  border-radius: 2px;
  background: ${props => props.theme.colors.secondaryButton.default};
  cursor: pointer;

  img {
    height: 1.5rem;
  }

  &:hover {
    background: ${props => props.theme.colors.secondaryButton.hover};
  }

  &:active {
    background: ${props => props.theme.colors.secondaryButton.active};
  }
`;

export const GenreCheckboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;

  .custom-checkbox {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .custom-checkbox input[type='checkbox'] {
    display: none;
  }

  .custom-checkbox .checkmark {
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${props => props.theme.colors.input.background};
    border: 1px solid ${props => props.theme.colors.input.border};
    border-radius: 4px;
    position: relative;
    margin-right: 0.25rem;
    cursor: pointer;
  }

  .custom-checkbox input[type='checkbox']:checked + .checkmark {
    background-color: ${props => props.theme.colors.input.borderFocus};
    border-color: ${props => props.theme.colors.input.borderFocus};
  }

  .custom-checkbox input[type='checkbox']:checked + .checkmark::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 3px;
    width: 0.25rem;
    height: 0.5rem;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
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
