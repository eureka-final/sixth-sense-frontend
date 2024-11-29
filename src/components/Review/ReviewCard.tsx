import { useNavigate } from 'react-router-dom';
import { Card, Poster } from './ReviewCard.style';
import { Body, Paragraph, Icon } from 'pov-design-system';
import Profile from '../common/Profile';
interface ReviewCardProps {
  id: number;
  movieTitle: string;
  title: string;
  contents: string;
  reviewer: string;
  profileImge: string;
  thumbnail: string;
  createdAt: string;
  likeAmount: number;
  isLiked: boolean;
}

function ReviewCard({ id, movieTitle, title, contents, reviewer, profileImge, thumbnail, createdAt, likeAmount, isLiked }: ReviewCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/review/${id}`);
      }}
    >
      <Poster>
        <img src={thumbnail} alt={movieTitle} />
        <Body size="small">{movieTitle}</Body>
      </Poster>
      <Profile name={reviewer} avatarUrl={profileImge} />
      <Paragraph>{title}</Paragraph>
      <Body size="large">{contents}</Body>
      <Body>{createdAt}</Body>
      <Icon icon={isLiked ? 'heartfill' : 'heartline'} /> {likeAmount}
    </Card>
  );
}

export default ReviewCard;