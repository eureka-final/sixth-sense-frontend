import { useEffect, useState } from 'react';

import { Badge } from 'pov-design-system';

import { BadgeWrapper } from '@/pages/Review/Review.style';
import ReviewList from '@/components/review/ReviewList';
import MyReviewList from '@/components/review/MyReviewList';
import ClubReviewList from '@/components/review/ClubReviewList';
import { ReviewPagePadded } from '@/pages/Review/index.styled';
import { useAuthStore } from '@/stores/useAuthStore';

const Index = () => {
  const user = useAuthStore((state) => state.user);
  const [sections, setSections] = useState([
    { text: '모든 리뷰', click: true },
    { text: '내 리뷰', click: false },
    { text: '클럽 리뷰', click: false },
  ]);

  const [sectionsType, setSectionsType] = useState('모든 리뷰');

  const handleBadgeClick = (index: number) => {
    const updatedSections = sections.map((section, i) => ({
      ...section,
      click: i === index,
    }));

    setSections(updatedSections);

    // 클릭한 섹션에 따라 ReviewList를 뿌려주기 위해 현재 sections 값 할당
    setSectionsType(sections[index].text);
  };

  useEffect(() => {
    if (!user) {
      setSections([{ text: '모든 리뷰', click: true }]);
    }
  }, []);

  return (
    <ReviewPagePadded>
      <BadgeWrapper>
        {sections.map((section, index) => (
          <Badge size="large" key={index} variant="section" click={section.click} onClick={() => handleBadgeClick(index)} css={{ cursor: 'pointer' }}>
            {section.text}
          </Badge>
        ))}
      </BadgeWrapper>
      {sectionsType === '모든 리뷰' && <ReviewList />}
      {sectionsType === '내 리뷰' && <MyReviewList />}
      {sectionsType === '클럽 리뷰' && <ClubReviewList />}
    </ReviewPagePadded>
  );
};

export default Index;
