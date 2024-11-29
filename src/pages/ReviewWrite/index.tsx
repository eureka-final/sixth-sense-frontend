import { useState, useEffect } from 'react';
import Padded from '../../components/templates/Padded/Padded';
import ReactEditor from '../../components/ReviewWrite/ReactEditor';
import { Heading, Body, Button, Modal, useOverlay, Logo } from 'pov-design-system';
import Keyword from '../../components/ReviewWrite/Keyword';
import ReviewToggle from '../../components/ReviewWrite/ReviewToggle';
import { HeadingContainer, ButtonContainer, Vs, Item } from './ReviewWrite.style';
import axios from 'axios';

const Index = () => {
  const { isOpen, open, close } = useOverlay();

  // ReactEditor 상태
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // Keyword 상태
  const [keywords, setKeywords] = useState<string[]>([]);

  // ReviewToggle 상태
  const [spoiler, setSpoiler] = useState<boolean>(false);

  // Modal 상태
  const [preference, setPreference] = useState<string>('');

  // 데이터 통합 후 요청 전송
  const handleSubmit = async () => {
    // TODO: 리뷰 작성 후 리뷰 상세 페이지로 이동
    close();
    const requestData = {
      title,
      contents: content,
      preference,
      keywords,
      spoiler,
    };
    console.log(requestData);

    // TODO: 영화 id 만들어지면 적용하기
    try {
      const response = await axios.post(`/movies/:id/reviews`, requestData);
      console.log('성공적으로 전송:', response.data);
    } catch (error) {
      console.error('데이터 전송 실패:', error);
    }
  };

  // 임시저장
  const handleTemporary = () => {
    const tempData = {
      title,
      content,
      preference,
      keywords,
      spoiler,
    };

    try {
      localStorage.setItem('reviewDraft', JSON.stringify(tempData));
      alert('임시 저장되었습니다!');
    } catch (error) {
      console.error('임시 저장 실패:', error);
      alert('임시 저장 중 문제가 발생했습니다.');
    }
  };
  // 로컬 스토리지에서 데이터 복원
  useEffect(() => {
    const savedDraft = localStorage.getItem('reviewDraft');
    if (savedDraft) {
      try {
        const draftData = JSON.parse(savedDraft);
        setTitle(draftData.title || '');
        setContent(draftData.content || '');
        setKeywords(draftData.keywords || []);
        setSpoiler(draftData.spoiler || false);
        setPreference(draftData.preference || '');
        console.log(draftData.title);
      } catch (error) {
        console.error('임시 저장된 데이터를 불러오는 데 실패했습니다:', error);
      }
    }
  }, []);
  return (
    <Padded>
      <HeadingContainer>
        <Heading size="large">리뷰쓰기</Heading>
      </HeadingContainer>

      <ReactEditor title={title} content={content} onChangeTitle={setTitle} onChangeContent={setContent} />
      <Keyword keywords={keywords} onKeywordsChange={setKeywords} />
      <ReviewToggle spoiler={spoiler} onSpoilerChange={setSpoiler} />

      <ButtonContainer>
        <Button variant="secondary" size="large" onClick={handleTemporary}>
          임시 저장하기
        </Button>
        <Button variant="primary" size="large" onClick={open}>
          저장하기
        </Button>
      </ButtonContainer>

      {/* 저장하기 버튼 누르면 나오는 모달창 */}
      <Modal isOpen={isOpen} closeModal={close}>
        <div>
          <Heading size="medium">영화를 평가해주세요.</Heading>
          <Body>이 영화에 대한 전반적인 평가는 어떠신가요?</Body>
          <ButtonContainer>
            <Item onClick={() => setPreference('bad')} isSelected={preference === 'bad'}>
              <Logo icon="type5" />
              <Body>별로에요!</Body>
            </Item>
            <Vs>
              <Body>vs</Body>
            </Vs>
            <Item onClick={() => setPreference('good')} isSelected={preference === 'good'}>
              <Logo icon="type6" />
              <Body>재밌었어요!</Body>
            </Item>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant="primary" onClick={handleSubmit} css={{ width: '100%' }}>
              평가하기
            </Button>
          </ButtonContainer>
        </div>
      </Modal>
    </Padded>
  );
};

export default Index;