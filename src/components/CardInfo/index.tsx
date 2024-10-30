import { CardInfoContent } from './styles';

interface CardInfoProps {
  label: string;
  value: string;
  ratingMetric?: boolean;
}

const CardInfo: React.FC<CardInfoProps> = ({
  label,
  value,
  ratingMetric = false,
}) => {
  return (
    <CardInfoContent $ratingMetric={ratingMetric}>
      <strong>{label}</strong>
      <p>{value}</p>
    </CardInfoContent>
  );
};

export default CardInfo;
