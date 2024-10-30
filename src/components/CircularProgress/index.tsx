import { CircularProgressContent, ScoreValue } from './styles';

interface CircularProgressProps {
  score: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ score }) => {
  return (
    <CircularProgressContent>
      <svg width="98" height="98" viewBox="0 0 98 98">
        <circle
          cx="49"
          cy="49"
          r="45"
          fill="none"
          strokeWidth="8"
          strokeDasharray="283"
          strokeDashoffset="0"
          className="background"
        ></circle>
        <circle
          cx="49"
          cy="49"
          r="45"
          fill="none"
          strokeWidth="8"
          strokeDasharray="283"
          strokeDashoffset={283 * (1 - score / 100)}
          className="foreground"
        ></circle>
      </svg>

      <ScoreValue>
        <strong>
          {score}
          <span>%</span>
        </strong>
      </ScoreValue>
    </CircularProgressContent>
  );
};

export default CircularProgress;