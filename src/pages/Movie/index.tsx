import Section from '../../components/movies/Section/Section';
import { Container, HomeContainer } from './Movie.styles';
import { useAuthStore } from '../../stores/useAuthStore';
import { constants } from '../../constants/constants';
import { useMoviesQuery } from '../../hooks/queries/useMoviesQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import MoviePageSkeleton from './MoviePageSkeleton';
import { Skeleton } from 'pov-design-system';
import { SectionContainer } from '../../components/movies/Section/Section.styles';

const Index = () => {
  const user = useAuthStore((state) => state.user);

  const { ref, inView } = useInView();
  const pageSize = 2;
  const [heading, setHeading] = useState<string>('');

  useEffect(() => {
    if (user) {
      setHeading(`${user?.nickname}${constants.movies.main.topic.recommendation}`);
    } else {
      setHeading('추천 영화');
    }
  });

  const { moviesData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useMoviesQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    // 초기 로딩 시 스켈레톤 12개 렌더링
    return (
      <>
        <SectionContainer>
          <Skeleton width="100%" height="30px" />
          {Array.from({ length: pageSize }).map((_, index) => (
            <MoviePageSkeleton key={`initial-skeleton-${index}`} />
          ))}
        </SectionContainer>
      </>
    );
  }

  return (
    <HomeContainer>
      <Container>
        <Section items={moviesData || []} heading={heading} />

        {/* 추가 로드 중 스켈레톤 렌더링 */}
        {isFetchingNextPage && Array.from({ length: pageSize }).map((_, index) => <MoviePageSkeleton key={`fetching-skeleton-${index}`} />)}

        {/* 트리거 ref 위치 */}
        {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
      </Container>
    </HomeContainer>
  );
};

export default Index;
