import { MovieCardSkeletonContent, SkeletonPoster } from './styles';

const MovieCardSkeleton: React.FC = () => {
  return (
    <MovieCardSkeletonContent>
      <SkeletonPoster />
    </MovieCardSkeletonContent>
  );
};

export default MovieCardSkeleton;
