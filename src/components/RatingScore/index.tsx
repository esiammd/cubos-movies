import { RatingScoreContent, ScoreValue } from './styles';

interface RatingScoreProps {
  score: number;
}

const RatingScore: React.FC<RatingScoreProps> = ({ score }) => {
  return (
    <RatingScoreContent>
      <svg width="98" height="98" viewBox="0 0 98 98">
        <circle
          cx="49"
          cy="49"
          r="45"
          fill="none"
          stroke-width="8"
          stroke-dasharray="283"
          stroke-dashoffset="0"
          className="background"
        ></circle>
        <circle
          cx="49"
          cy="49"
          r="45"
          fill="none"
          stroke-width="8"
          stroke-dasharray="283"
          stroke-dashoffset={283 * (1 - score / 100)}
          className="foreground"
        ></circle>
      </svg>

      <ScoreValue>
        <strong>
          {score}
          <span>%</span>
        </strong>
      </ScoreValue>
    </RatingScoreContent>
  );
};

export default RatingScore;
