import { MovieTrailerContent } from './styles';

interface MovieTrailerProps {
  trailerUrl: string;
}

const MovieTrailer: React.FC<MovieTrailerProps> = ({ trailerUrl }) => {
  return (
    <MovieTrailerContent>
      <h2>Trailer</h2>
      <iframe src={trailerUrl}></iframe>
    </MovieTrailerContent>
  );
};

export default MovieTrailer;
