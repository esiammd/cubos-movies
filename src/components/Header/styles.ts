import styled from 'styled-components';

import hexToRgba from '../../utils/hexToRgba';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background: ${props => hexToRgba(props.theme.colors.background, 0.5)};
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  max-width: 85rem;
  margin: 0 auto;
`;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  img {
    height: 2.25rem;
  }

  strong {
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    line-height: 2.42;
    color: ${props => props.theme.colors.text1};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ToggleTheme = styled.button`
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
