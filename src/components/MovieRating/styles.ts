import styled from 'styled-components';

export const MovieRatingContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RatingMetrics = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex: 1;
  }
`;
