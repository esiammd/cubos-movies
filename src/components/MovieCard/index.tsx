import { MovieProps } from '../../pages/Home';
import RatingScore from '../RatingScore';

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
  return (
    <MovieCardContent>
      <a>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />

        <MovieInfo>
          <Title>{movie.title.toUpperCase()}</Title>
          <Genres className="hidden">Ação, Aventura, Ficção Científica</Genres>
        </MovieInfo>

        <Score className="hidden">
          <RatingScore score={movie.vote_average * 10} />
        </Score>
      </a>
    </MovieCardContent>
  );
};

export default MovieCard;
