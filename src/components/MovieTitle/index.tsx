import { MovieTitleContent, Title, OriginalTitle, Tagline } from './styles';

interface MovieTitleProps {
  title: string;
  originalTitle: string;
  tagline: string | null;
}

const MovieTitle: React.FC<MovieTitleProps> = ({
  title,
  originalTitle,
  tagline,
}) => {
  return (
    <MovieTitleContent>
      <Title>{title}</Title>
      <OriginalTitle>Título original: {originalTitle}</OriginalTitle>
      <Tagline>
        <em>{tagline}</em>
      </Tagline>
    </MovieTitleContent>
  );
};

export default MovieTitle;
