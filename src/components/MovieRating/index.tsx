import CardInfo from '../CardInfo';
import RatingScore from '../RatingScore';

import { MovieRatingContent, RatingMetrics } from './styles';

interface MovieRatingProps {
  popularity: number;
  votes: number;
  score: number;
}

const MovieRating: React.FC<MovieRatingProps> = ({
  popularity,
  votes,
  score,
}) => {
  return (
    <MovieRatingContent>
      <RatingMetrics>
        <CardInfo
          label="POPULARIDADE"
          value={String(popularity)}
          ratingMetric
        />
        <CardInfo label="VOTOS" value={String(votes)} ratingMetric />
      </RatingMetrics>

      <RatingScore score={score} />
    </MovieRatingContent>
  );
};

export default MovieRating;
