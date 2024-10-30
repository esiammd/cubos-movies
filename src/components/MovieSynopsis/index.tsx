import { MovieSynopsisContent } from './styles';

interface MovieSynopsisProps {
  synopsis: string;
}

const MovieSynopsis: React.FC<MovieSynopsisProps> = ({ synopsis }) => {
  return (
    <MovieSynopsisContent>
      <strong>SINOPSE</strong>
      <p>{synopsis}</p>
    </MovieSynopsisContent>
  );
};

export default MovieSynopsis;
