import styled from "styled-components";
import StepNavigation from "components/StepNavigation.js"
import GuestSelect from "components/GuestSelect.js"
import ContinueButton from "components/ContinueButton.js"
import ReservationTitle from "components/ReservationTitle.js";
import theme from 'style/theme';

const GuestNumber = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  line-height: 2.375rem;
  text-align: center;
  color: ${theme.blue};
  margin-top: 5.688rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24.063rem;
`

export const Reservation1 = () => {

  return (
    <ReservationTitle value={"투숙객"}>
    <StepNavigation page = {'reservation1'} labelArray={['투숙객 선택', '날짜 선택', '객실 선택']}></StepNavigation>
    <GuestNumber>투숙객 및 객실</GuestNumber>
    <GuestSelect></GuestSelect>
    <ButtonWrapper>
      <ContinueButton id={'reservation2'} value={'확인 및 계속'}></ContinueButton>
    </ButtonWrapper>
    </ReservationTitle>
  )

}

