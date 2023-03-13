import styled from "styled-components";
import StepNavigation from "components/StepNavigation.js"
import GuestSelect from "components/GuestSelect.js"

const Reservation1Wrapper = styled.div`
  margin-top: 223px;
`
const Guest = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #212C92;
`
const GuestNumber = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #212C92;
  margin-top: 91px;
`

const ContinueButton = styled.button`
  width: 340px;
  height: 56px;
  background-color: #212C92;
  border-radius: 30px;
  border:none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin: auto;
  display: block;
  margin-top: 90px;
`

function Reservation1(){

  const labelArray = ['투숙객 선택', '날짜 선택', '객실 선택'];

  return (
  <Reservation1Wrapper>
    <Guest>투숙객</Guest>
    <StepNavigation labelArray={labelArray}></StepNavigation>
    <GuestNumber>투숙객 및 객실</GuestNumber>
    <GuestSelect></GuestSelect>
    <ContinueButton>확인 및 계속</ContinueButton>
  </Reservation1Wrapper>
  )

}

export default Reservation1;