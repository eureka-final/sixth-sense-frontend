import { useNavigate } from 'react-router-dom';
import { CardContainer, CardFlex, ReviewCardContainer, TitleInfo, GenreWrapper } from './ClubCard.style';
import { Body, Input, Icon, Heading, Logo, Badge } from 'pov-design-system';
import { useClubsQuery } from '../../hooks/queries/useClubsQuery';

function ClubCard() {
  const navigate = useNavigate();
  const { clubsData } = useClubsQuery();

  return (
    <>
      <Input placeholder="검색어를 입력해 주세요" icon={<Icon icon="search" color="#ADACAF" />} />

      {clubsData &&
        clubsData.data.clubs.map((club) => {
          return (
            <CardContainer
              key={club.clubId}
              onClick={() => {
                navigate(`/club/detail/${club.clubId}`);
              }}
            >
              <CardFlex>
                <ReviewCardContainer>
                  <Heading size="large">{club.clubName}</Heading>
                  <Body size="large">{club.clubDescription}</Body>
                  <Body>
                    {club.participant}/{club.maxParticipant}
                  </Body>
                  <Body>북마크 {club.clubMovieCount}개</Body>
                </ReviewCardContainer>
              </CardFlex>
              <GenreWrapper>
                {club.clubFavorGenres.map((genre, index) => (
                  <Badge key={index} variant="keyword" cancel={true}>
                    {genre}
                  </Badge>
                ))}
              </GenreWrapper>
            </CardContainer>
          );
        })}
    </>
  );
}

// eslint-disable-next-line react/display-name
ClubCard.Empty = () => {
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 클럽이 없습니다.</Heading>
      <Logo icon="type3" />
    </TitleInfo>
  );
};

export default ClubCard;
