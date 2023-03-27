import styled from 'styled-components/macro';
import theme from 'style/theme';
import { useEffect } from 'react';
import gsap from 'gsap';
import Topbtn from 'components/TopBtn';
import Header from 'components/Header/Header';
import Footer from 'components/footer/Footer';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import { SubNav } from '../components/subNav/SubNav';
import { DetailPageTitle } from 'components/detailPageTitle/DetailPageTitle';
import { DetailPageDesc } from 'components/detailPageTitle/DetailPageDesc';
import { ChooseList, ChooseListBg } from 'components/chooseList';

export const Reservation = () => {
  const subNavData = [
    {
      id: 1,
      title: 'RESERVATION',
      link: '/about',
      subListTitle: [
        { name: 'RESERVATION', link: '/reservation' },
        { name: 'DIF', link: '/about' },
        { name: 'GUAM', link: '/guam' },
        { name: 'SAIPAN', link: '/saipan' },
        { name: 'NOTICE', link: '/notice' },
        { name: 'COMMUNITY', link: '/community' },
      ],
    },
    {
      id: 2,
      title: '예약하기',
      subListTitle: [
        { name: '예약하기', link: '/reservation' },
        { name: '자주하는 질문', link: '/' },
        { name: '일반문의', link: '/' },
        { name: '확정예약문의', link: '/' },
      ],
    },
  ];
  const reserData = [
    {
      id: 1,
      image: 'images/fix-guam.svg',
      alt: '괌 아이콘',
      headingLine: 'DIF',
      headingBold: 'Guam',
      desc: '괌 최대규모의 워터파크에서 펼쳐지는 꿈같은 즐거움이 가득한 곳',
      strong: '신규예약 및 변경/취소가 가능합니다',
    },
    {
      id: 2,
      image: 'images/fix-saipan.svg',
      alt: '괌 아이콘',
      headingLine: 'DIF',
      headingBold: 'Saipan',
      desc: '모험과 짜릿함, 활동적인 여행을 즐기는 당신을 위한 레포츠 천국',
      strong: '신규예약 및 변경/취소가 가능합니다',
    },
  ];
  gsap.config({ nullTargetWarn: false });
  useEffect(() => {
    setTimeout(() => {
      gsap.to('.moveItem01 .moveImage', {
        y: -400,
        scrollTrigger: {
          trigger: '.moveItem01',
          start: 'center center',
          end: '1200 center',
          scrub: true,
        },
      });
    }, 100);
  }, []);

  return (
    <>
      <Header />
      <Topbtn />
      <SubNav subNavData={subNavData} />
      <SmoothScroll>
        <StyledReserContainer className="changeBg">
          <StyledReserInner>
            <DetailPageTitle description>예약하기</DetailPageTitle>
            <DetailPageDesc>
              DIF는 잊을 수 없는 최고의 여행 경험을 선사합니다.
            </DetailPageDesc>
            <StyledChooseListContainer>
              <ChooseList reserData={reserData} />
            </StyledChooseListContainer>
            <StyledSubTitle>DIF Special Offers</StyledSubTitle>
            <StyledSubDesc>
              편안한 휴식, 가족/연인과 함께 풍성한 혜택을 누려보세요.
            </StyledSubDesc>
          </StyledReserInner>
          <ChooseListBg />
        </StyledReserContainer>
        <Footer />
      </SmoothScroll>
    </>
  );
};

const StyledReserContainer = styled.section`
  margin-top: 21.25rem;
`;
const StyledReserInner = styled.div`
  max-width: 73.75rem;
  margin: 0 auto;
  padding: 0 6.25rem;
  position: relative;
  z-index: 1;
`;
const StyledChooseListContainer = styled.div`
  margin-top: 6.25rem;
`;
const StyledSubTitle = styled.h3`
  padding: 14rem 0 0 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: ${theme.blue};
  text-align: center;
`;
const StyledSubDesc = styled.p`
  margin-top: 1.875rem;
  margin-bottom: 12.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: ${theme.indigo};
  text-align: center;
`;
