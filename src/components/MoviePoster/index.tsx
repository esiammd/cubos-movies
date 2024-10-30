import { ImgHTMLAttributes } from 'react';

import { MoviePosterContent } from './styles';

type MoviePosterProps = ImgHTMLAttributes<HTMLImageElement>;

const MoviePoster: React.FC<MoviePosterProps> = ({ ...props }) => {
  return <MoviePosterContent {...props} />;
};

export default MoviePoster;
