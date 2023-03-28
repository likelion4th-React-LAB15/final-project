import ReservationTitle from 'components/Reservation/ReservationTitle';
import StepNavigation from 'components/Reservation/StepNavigation';
import ReservationCalendar from 'components/Reservation/ReservationCalendar';
import ContinueButton from 'components/ContinueButton.js';
import BackButton from 'components/BackButton.js';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';

export const Reservation2 = () => {
  return (
    <>
      <Header />
      <SmoothScroll>
        <ReservationTitle value={'날짜'}>
          <StepNavigation
            page={'reservation2'}
            labelArray={['투숙객 선택', '날짜 선택', '객실 선택']}
          ></StepNavigation>
          <ReservationCalendar />
          <ButtonWrapper>
            <BackButton id={'reservation1'} value={'뒤로'} />
            <ContinueButton id={'reservation3'} value={'숙박 기간 및 확인'} />
          </ButtonWrapper>
        </ReservationTitle>
        <Footer />
      </SmoothScroll>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.313rem;
  margin: 5.625rem 0 15.168rem;
`;
