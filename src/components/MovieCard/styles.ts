import styled from 'styled-components';

export const MovieCardContent = styled.li`
  width: 100%;
  max-width: 15rem;
  height: 22rem;

  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    .hidden {
      opacity: 1;
      height: auto;
    }

    img {
      opacity: 0.8;
    }
  }
  @media (max-width: 768px) {
    height: 20rem;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: opacity 0.2s;
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 9.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.colors.movieCard.title};
`;

export const Genres = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.movieCard.description};
  margin-top: 0.5rem;
  opacity: 0;
  height: 0;

  transition: all 0.6s;
`;

export const Score = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.6s;

  svg {
    width: 8.75rem;
    height: 8.75rem;
  }

  @media (max-width: 768px) {
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
