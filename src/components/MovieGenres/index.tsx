import { MovieGenresContent, GenereTags, Tag } from './styles';

interface MovieGenresProps {
  genres: string[];
}

const MovieGenres: React.FC<MovieGenresProps> = ({ genres }) => {
  return (
    <MovieGenresContent>
      <strong>Gêneros</strong>
      <GenereTags>
        {genres.map(genre => (
          <Tag key={genre}>{genre.toUpperCase()}</Tag>
        ))}
      </GenereTags>
    </MovieGenresContent>
  );
};

export default MovieGenres;
