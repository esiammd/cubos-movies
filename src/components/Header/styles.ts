import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border}30;
  background: ${props => props.theme.colors.background}80;
`;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 2.25rem;
  }

  strong {
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    line-height: 2.42;
    color: ${props => props.theme.colors.text};
  }
`;

export const ButtonSwitchTheme = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;

  border: 0;
  border-radius: 2px;
  background: ${props => props.theme.colors.secondaryButton};
  cursor: pointer;

  img {
    height: 1.5rem;
  }

  &:hover {
    background: ${props => props.theme.colors.secondaryButtonHover};
  }

  &:active {
    background: ${props => props.theme.colors.secondaryButtonActive};
  }
`;
