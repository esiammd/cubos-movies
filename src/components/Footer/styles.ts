import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: 1.5rem;

  color: ${props => props.theme.colors.textFooter};
  text-align: center;

  border-top: 1px solid ${props => props.theme.colors.border}30;

  // Estilos para dispositivos móveis
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;
