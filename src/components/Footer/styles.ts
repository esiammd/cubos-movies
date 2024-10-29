import styled from 'styled-components';

export const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text2};
  text-align: center;
`;
