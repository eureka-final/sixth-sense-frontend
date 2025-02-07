import styled from '@emotion/styled';

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const ClubContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const PopularReviewListContainer = styled.div`
  gap: 16px; /* 카드 간격 */
  margin-top: 16px;

  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    padding-bottom: 48px;
    flex-direction: column;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 64px;
  }
`;

export const ClubReviewListContainer = styled.div`
  gap: 16px; /* 카드 간격 */
  margin-top: 16px;

  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    padding-bottom: 48px;
    flex-direction: column;
  }

  @media (min-width: 600px) {
    width: calc(1200px - 116px * 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 64px;
  }
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundElevated};
  width: 100%;
  padding: 24px;
  gap: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ClubItem = styled.div`
  transition:
    transform 0.3s ease,
    color 0.3s ease; /* 애니메이션 효과 */
  &:hover {
    transform: scale(1.1); /* 크기 확대 */
  }
`;

export const CardFlex = styled.div`
  display: flex;
  gap: 32px;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
`;

export const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const FlexBetween = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px; /* 아이콘과 좋아요 수 사이 간격 */
  color: ${({ theme }) => theme.color.green600};
  font-size: 16px;
`;

export const Spoiler = styled.div`
  display: flex;
  gap: 5px;
`;

export const SpoMore = styled.div`
  color: ${({ theme }) => theme.color.green600};
`;

export const ReadMore = styled.div`
  color: ${({ theme }) => theme.color.gray400};
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  gap: 20px;
`;
