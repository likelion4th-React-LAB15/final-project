import styled from "styled-components";
import StepNavigation from "components/StepNavigation.js"
import GuestSelect from "components/GuestSelect.js"
import ContinueButton from "components/ContinueButton.js"

const Reservation1Wrapper = styled.div`
  margin-top: 13.938rem;
`
const Guest = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  color: ${(props) => props.theme.blue};
`
const GuestNumber = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  line-height: 2.375rem;
  text-align: center;
  color: ${(props) => props.theme.blue};
  margin-top: 5.688rem;
`

function Reservation1(){

  const labelArray = ['투숙객 선택', '날짜 선택', '객실 선택'];

  return (
  <Reservation1Wrapper>
    <Guest>투숙객</Guest>
    <StepNavigation labelArray={labelArray}></StepNavigation>
    <GuestNumber>투숙객 및 객실</GuestNumber>
    <GuestSelect></GuestSelect>
    <ContinueButton value={'확인 및 계속'}></ContinueButton>
  </Reservation1Wrapper>
  )

}

export default Reservation1;