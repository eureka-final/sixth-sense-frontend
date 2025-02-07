import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dompurify from 'dompurify';

import { Body, Icon, Paragraph } from 'pov-design-system';

import { Additionals, ReviewContainer, Contents, Wrapper } from '@/components/movies/Review/Review.styles';
import Profile from '@/components/common/Profile/Profile';
import { useLikeMutation, useDisLikeMutation } from '@/hooks/queries/useLikeMutation';
import { LikeContainer, Spoiler, SpoMore, ReadMore } from '@/components/review/ReviewCard.style';

interface ReviewProps {
  reviewers: {
    reviewId: string;
    profileImage: string;
    nickname: string;
    contents: string;
    createdAt: string;
    likeAmount: number;
    isSpoiler: boolean;
    isLiked: boolean;
  };
}

const Review = ({ reviewers }: ReviewProps) => {
  const navigate = useNavigate();
  const { movieId } = useParams<{ movieId: string }>();

  const sanitizer = dompurify.sanitize;

  const truncateContents = (text: string | undefined, maxLength: number) => {
    if (!text) return '';
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: sanitizer(truncatedText).replace(/<img[^>]*>/g, '') }} />
          <span>...</span>
          <ReadMore>더보기</ReadMore>
        </>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: sanitizer(text).replace(/<img[^>]*>/g, '') }} />;
  };

  const [likes, setLikes] = useState(reviewers.likeAmount);
  const [likeAction, setLikeAction] = useState<boolean | null>(reviewers.isLiked);
  const likeMutation = useLikeMutation();
  const disLikeMutation = useDisLikeMutation();

  const onLike = () => {
    if (likeAction === false) {
      likeMutation.mutate(
        { movieId: movieId!, reviewId: reviewers.reviewId! },
        {
          onSuccess: () => {
            setLikes(likes + 1);
            setLikeAction(true);
          },
        }
      );
    } else {
      disLikeMutation.mutate(
        { movieId: movieId!, reviewId: reviewers.reviewId! },
        {
          onSuccess: () => {
            setLikes(likes - 1);
            setLikeAction(false);
          },
        }
      );
    }
  };

  return (
    <ReviewContainer>
      <Contents
        onClick={() => {
          navigate(`/review/${movieId}/detail/${reviewers.reviewId}`);
        }}
      >
        <Wrapper>
          <Profile name={reviewers.nickname} avatarUrl={reviewers.profileImage} />
        </Wrapper>
        {reviewers.isSpoiler ? (
          <Spoiler>
            <Body size="xLarge">스포일러가 있어요!</Body>
            <Body size="xLarge">
              <SpoMore>더보기</SpoMore>
            </Body>
          </Spoiler>
        ) : (
          <Paragraph>{truncateContents(reviewers.contents, 300)}</Paragraph>
        )}
        <Body size="medium" style={{ color: '#ADACAF' }}>
          {new Date(reviewers.createdAt).toLocaleDateString()}
        </Body>
      </Contents>
      <Additionals justify="flex-end">
        <LikeContainer onClick={onLike}>
          <Icon icon={likeAction ? 'heartfill' : 'heartline'} css={{ width: '16px' }} /> {likes}
        </LikeContainer>
      </Additionals>
    </ReviewContainer>
  );
};

export default Review;
