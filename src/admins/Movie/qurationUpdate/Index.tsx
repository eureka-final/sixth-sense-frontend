import { useState } from 'react';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import {
  Container,
  Header,
  Card,
  Info,
  InfoContainer,
  Wrapper,
  Input,
  ModalInput,
  ButtonContainer,
  Badges,
  MovieButton,
  ModalContainer,
  List,
  ModalItem,
} from './Index.styles';
import { Heading, Body, Button, Badge, Modal, useOverlay, Checkbox } from 'pov-design-system';
import { formatDate } from '../../../utils/formatTade';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { isOpen, open, close } = useOverlay();

  const [categories, setCategories] = useState([
    {
      name: '배우',
      target: false,
    },
    {
      name: '장르',
      target: false,
    },
    {
      name: '감독',
      target: false,
    },
    {
      name: '개봉일자',
      target: false,
    },
    {
      name: '기타',
      target: false,
    },
  ]);

  const [movies, setMovies] = useState([
    {
      name: '해리포터1 마법사의 돌',
      startTime: '2024-12-16T04:25:26.954Z',
      target: false,
    },
    {
      name: '해리포터1 마법사의 돌',
      startTime: '2024-12-16T04:25:26.954Z',
      target: false,
    },
    {
      name: '해리포터1 마법사의 돌',
      startTime: '2024-12-16T04:25:26.954Z',
      target: false,
    },
    {
      name: '해리포터1 마법사의 돌',
      startTime: '2024-12-16T04:25:26.954Z',
      target: false,
    },
    {
      name: '해리포터1 마법사의 돌',
      startTime: '2024-12-16T04:25:26.954Z',
      target: false,
    },
  ]);

  const handleBadgeClick = (categoryName: string) => {
    setCategories((prevcategories) =>
      prevcategories.map((category) => (category.name === categoryName ? { ...category, target: !category.target } : category))
    );
  };

  const handleMovieClick = (movieName: string) => {
    setMovies((prevmovies) => prevmovies.map((movie) => (movie.name === movieName ? { ...movie, target: !movie.target } : movie)));
  };

  return (
    <AdminTemplate>
      <Modal isOpen={isOpen} closeModal={close}>
        <ModalContainer>
          <Header>
            <Heading size="medium">영화 선택하기</Heading>
            <Body style={{ color: '#ADACAF' }}>큐레이션에 등록할 영화를 선택하세요</Body>
          </Header>
          <ModalInput
            placeholder="영화 제목으로 검색하기"
            value={searchKeyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
          />
          <List>
            {movies.map((movie, index) => (
              <ModalItem key={movie.name + index} onClick={() => handleMovieClick(movie.name)}>
                <Checkbox isChecked={movie.target} />
                <Body>{movie.name}</Body>
                <Body>{formatDate(movie.startTime)}</Body>
              </ModalItem>
            ))}
          </List>
        </ModalContainer>
      </Modal>
      <Container>
        <Header>
          <Heading size="large">큐레이션 등록하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            영화 큐레이션을 등록할 수 있습니다.
          </Body>
        </Header>
        <Card>
          <InfoContainer>
            <Info>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  제목
                </Body>
                <Input
                  placeholder="큐레이션 제목을 입력해 주세요"
                  value={searchKeyword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  카테고리
                </Body>
                <Badges>
                  {categories.map((category) => (
                    <Badge variant="keyword" cancel={category.target} key={category.name} onClick={() => handleBadgeClick(category.name)}>
                      {category.name}
                    </Badge>
                  ))}
                </Badges>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  테마
                </Body>
                <Input
                  placeholder="큐레이션 테마를 입력해 주세요"
                  value={searchKeyword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  설명
                </Body>
                <Input
                  placeholder="큐레이션 설명을 입력해 주세요"
                  value={searchKeyword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  영화
                </Body>
                <MovieButton onClick={open}>+ 영화 추가하기</MovieButton>
              </Wrapper>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Button variant="primary" css={{ width: '100%' }}>
              수정하기
            </Button>
          </ButtonContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
