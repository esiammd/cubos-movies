import styled, { css } from 'styled-components';

interface IContentInputProps {
  $isFocused: boolean;
}

export const InputContent = styled.div<IContentInputProps>`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.input.border};
  background: ${props => props.theme.colors.input.background};

  display: flex;

  input {
    width: 100%;
    background: transparent;
    outline: none;
    border: 0;
    margin-right: 1rem;
    color: ${props => props.theme.colors.text1};
  }

  &::placeholder {
    color: ${props => props.theme.colors.input.placeholder};
  }

  ${props =>
    props.$isFocused &&
    css`
      border-color: ${props => props.theme.colors.input.borderFocus};
    `}
`;
