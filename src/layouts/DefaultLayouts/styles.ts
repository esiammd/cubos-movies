import styled from 'styled-components';

export const LayoutContainer = styled.div`
  height: 100vh;
  max-width: 85rem;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 80px 1fr 68px;

  @media (max-width: 768px) {
    grid-template-rows: 80px 1fr 80px;
  }
`;
