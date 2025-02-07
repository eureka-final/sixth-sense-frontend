import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { themes } from 'pov-design-system';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 480px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundLayer = styled.div<{ src: string }>`
  width: 100%;
  height: 520px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ src }) => (src ? `url(${src})` : '#ffffff')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const Layar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 55px;
  left: 24px;
  z-index: 20;
  gap: 16px;
  @media (min-width: 0px) and (max-width: 600px) {
    left: 24px;
  }

  @media (min-width: 600px) {
    left: 76px;
  }
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 32px;
  gap: 16px;
`;

export const Wrapper = styled.div`
  z-index: 30;
  font-weight: 100;
  /* @media (min-width: 0px) and (max-width: 600px) {
    top: 60%;
    right: 5%;
  }

  @media (min-width: 600px) {
    top: 55%;
    right: 20%;
  } */
`;

export const MenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundElevated};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: absolute;
  top: 30px;
`;

export const ClubMenu = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 48px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0;
`;

export const Menu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  color: ${({ theme }) => theme.teritary};
`;

export const LinkWrapper = styled.div`
  background-color: ${({ theme }) => theme.muted};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 8px;
  color: ${({ theme }) => theme.teritary};
`;

export const ModalContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Additionals = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  gap: 4px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--Color-background-background-elevated, #4c494e);
  border-radius: 8px;
  padding: 20px;
`;

export const Section = styled.div`
  gap: 10px;
  margin-bottom: 48px;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const numberStyling = css({
  color: themes.dark.color.green600,
});

export const ClubBookMarkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6열로 구성 */
  gap: 24px; /* 카드 간격 */
  margin-top: 16px;
`;
