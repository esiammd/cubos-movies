import styled from 'styled-components';

import hexToRgba from '../../utils/hexToRgba';

export const DetailsContainer = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to right,
        ${props => hexToRgba(props.theme.colors.background, 1)} 0%,
        ${props => hexToRgba(props.theme.colors.background, 0.8)} 50%,
        ${props => hexToRgba(props.theme.colors.background, 0)} 100%
      ),
      url('https://img34.tokyvideo.com/videos/365/365013/previews/previews_0012_custom_1697426435.1015.jpg');
    background-size: cover;
    background-position: left center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 0rem;
    flex-direction: column;

    &::before {
      background: none;
    }
  }
`;

export const MovieOverview = styled.div`
  margin-left: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0rem;
    margin-top: 2rem;
  }
`;

export const MovieHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const MovieInformation = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const MovieDescription = styled.div``;

export const AdditionalMovieInfo = styled.div`
  margin-left: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const MovieAttributes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const MovieFinancials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
