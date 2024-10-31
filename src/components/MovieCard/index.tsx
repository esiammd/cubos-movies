import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import RatingScore from '../RatingScore';

import { MovieProps } from '../../interfaces/movie';

import {
  MovieCardContent,
  MoviePoster,
  MovieInfo,
  Title,
  Genres,
  Score,
} from './styles';

interface MovieCardProps {
  movie: MovieProps;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = useCallback(() => {
    navigate(`/movie/${movie.id}`);
  }, [movie.id, navigate]);

  return (
    <MovieCardContent onClick={handleCardClick}>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />

      <MovieInfo>
        <Title>{movie.title.toUpperCase()}</Title>
        <Genres className="hidden">{movie.genres.join(', ')}</Genres>
      </MovieInfo>

      <Score className="hidden">
        <RatingScore score={movie.vote_average} />
      </Score>
    </MovieCardContent>
  );
};

export default MovieCard;
