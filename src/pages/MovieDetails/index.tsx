import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { api } from '../../lib/axios';

import mapStatusToPortuguese from '../../utils/mapStatusToPortuguese';
import formatCurrency from '../../utils/formatCurrency';

import { MovieProps } from '../../interfaces/movie';

import CardInfo from '../../components/CardInfo';
import MovieGenres from '../../components/MovieGenres';
import MovieRating from '../../components/MovieRating';
import MovieSynopsis from '../../components/MovieSynopsis';
import MovieTitle from '../../components/MovieTitle';
import MovieTrailer from '../../components/MovieTrailer';

import {
  MovieDetailsContainer,
  MovieMovieDetails,
  MoviePoster,
  MovieOverview,
  MovieHeader,
  MovieInformation,
  MovieDescription,
  AdditionalMovieInfo,
  MovieAttributes,
  MovieFinancials,
} from './styles';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({} as MovieProps);
  const [isLoading, setIsLoading] = useState(true);

  const getMovieTrailer = useCallback(async () => {
    const response = await api.get(`/movie/${id}/videos`);
    const videos = response.data.results;
    const trailer = videos.find(
      (video: { type: string }) => video.type === 'Trailer',
    );
    console.log(response.data);
    return trailer;
  }, [id]);

  const getMovie = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get(`/movie/${id}`);
    const movieData = response.data;

    const trailer_key = movieData.video ? (await getMovieTrailer()).key : '';

    const hours: number = Math.floor(movieData.runtime / 60);
    const minutes: number = movieData.runtime % 60;
    const runtime_formatted =
      hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

    const movieFormatted = {
      ...movieData,
      languages: movieData.spoken_languages.map(
        (language: { name: string }) => language.name,
      ),
      trailer_key,
      genre_names: movieData.genres.map(
        (genre: { name: string }) => genre.name,
      ),
      runtime_formatted,
    };

    setMovie(movieFormatted);
    setIsLoading(false);
  }, [getMovieTrailer, id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <MovieDetailsContainer>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Carregando...
        </div>
      ) : (
        <>
          <MovieMovieDetails
            $backdrop={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          >
            <MoviePoster
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />

            <MovieOverview>
              <MovieHeader>
                <MovieTitle
                  title={movie.title}
                  originalTitle={movie.original_title}
                  tagline={movie.tagline}
                />

                <MovieRating
                  popularity={movie.popularity}
                  votes={movie.vote_count}
                  score={movie.vote_average}
                />
              </MovieHeader>

              <MovieInformation>
                <MovieDescription>
                  <MovieSynopsis synopsis={movie.overview} />
                  <MovieGenres genres={movie.genre_names} />
                </MovieDescription>

                <AdditionalMovieInfo>
                  <MovieAttributes>
                    <CardInfo
                      label="LANÇAMENTO"
                      value={format(
                        new Date(movie.release_date),
                        "dd'/'MM'/'y",
                        {
                          locale: ptBR,
                        },
                      )}
                    />
                    <CardInfo label="DURAÇÃO" value={movie.runtime_formatted} />
                    <CardInfo
                      label="SITUAÇÃO"
                      value={mapStatusToPortuguese(movie.status)}
                    />
                    <CardInfo
                      label="IDIOMA"
                      value={movie.languages.join(', ')}
                    />
                  </MovieAttributes>

                  <MovieFinancials>
                    <CardInfo
                      label="ORÇAMENTO"
                      value={formatCurrency(movie.budget)}
                    />
                    <CardInfo
                      label="RECEITA"
                      value={formatCurrency(movie.revenue)}
                    />
                    <CardInfo
                      label="LUCRO"
                      value={formatCurrency(movie.revenue - movie.budget)}
                    />
                  </MovieFinancials>
                </AdditionalMovieInfo>
              </MovieInformation>
            </MovieOverview>
          </MovieMovieDetails>

          <MovieTrailer
            trailerUrl={`https://www.youtube.com/embed/${movie.trailer_key}`}
          />
        </>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
