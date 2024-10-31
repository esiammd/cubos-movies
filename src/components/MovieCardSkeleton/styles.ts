// styles.ts
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const MovieCardSkeletonContent = styled.li`
  width: 100%;
  height: 355px;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

export const SkeletonPoster = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: ${props => props.theme.colors.skeleton};
  animation: ${shimmer} 1.5s infinite;
`;
