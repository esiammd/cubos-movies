import { GenreProps } from '../../interfaces/genre';

import { MovieGenresContent, GenereTags, Tag } from './styles';

interface MovieGenresProps {
  genres: GenreProps[];
}

const MovieGenres: React.FC<MovieGenresProps> = ({ genres }) => {
  return (
    <MovieGenresContent>
      <strong>Gêneros</strong>
      <GenereTags>
        {genres.map(genre => (
          <Tag key={genre.name}>{genre.name.toUpperCase()}</Tag>
        ))}
      </GenereTags>
    </MovieGenresContent>
  );
};

export default MovieGenres;
