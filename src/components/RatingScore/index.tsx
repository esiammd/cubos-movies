import { RatingScoreContent, ScoreValue } from './styles';

interface RatingScoreProps {
  score: number;
}

const RatingScore: React.FC<RatingScoreProps> = ({ score }) => {
  const scorePercentage = score * 10;
  const size = 98;
  const strokeWidth = 8;

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * (size - strokeWidth);

  const backgroundStrokeDashoffset = 0;
  const foregroundStrokeDashoffset =
    circumference * (1 - scorePercentage / 100);

  return (
    <RatingScoreContent>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={backgroundStrokeDashoffset}
          className="background"
        ></circle>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={foregroundStrokeDashoffset}
          className="foreground"
        ></circle>
      </svg>

      <ScoreValue>
        <strong>
          {scorePercentage.toFixed(scorePercentage % 1 === 0 ? 0 : 2)}
          <span>%</span>
        </strong>
      </ScoreValue>
    </RatingScoreContent>
  );
};

export default RatingScore;
