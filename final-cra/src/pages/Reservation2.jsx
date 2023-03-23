import ReservationTitle from 'components/Reservation/ReservationTitle.js';
import StepNavigation from 'components/Reservation/StepNavigation.js';
import ReservationCalendar from 'components/Reservation/ReservationCalendar.js';
import ContinueButton from 'components/ContinueButton.js';
import BackButton from 'components/BackButton.js';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.313rem;
  margin: 5.625rem 0 15.168rem;
`;

export const Reservation2 = () => {
  return (
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
  );
};
