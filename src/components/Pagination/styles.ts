import styled, { css } from 'styled-components';

interface PageNumberListProps {
  $pageActive?: boolean;
}

export const PaginationContent = styled.ul`
  display: flex;
`;

const PageItem = styled.button<PageNumberListProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 2.75rem;
  padding: 0 1.25rem;
  margin: 0 0.375rem;

  border: 0;
  border-radius: 2px;

  background: ${props => props.theme.colors.primaryButton.active};
  color: ${props => props.theme.colors.buttonText.default};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  ${props =>
    props.$pageActive &&
    css`
      background: ${props => props.theme.colors.secondaryButton.disabled};
      font-weight: 500;
    `}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 1;
    background: ${props => props.theme.colors.secondaryButton.disabled};
    color: ${props => props.theme.colors.buttonText.disabled};
    cursor: inherit;
  }
`;

export const PrevPage = styled(PageItem)`
  width: 3.5rem;
`;
export const NextPage = styled(PageItem)`
  width: 3.5rem;
`;
export const PageNumber = styled(PageItem)``;
