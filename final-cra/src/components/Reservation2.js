import styled from "styled-components";
import ReservationTitle from "components/ReservationTitle.js";
import StepNavigation from "components/StepNavigation.js"

function Reservation2(){

  return (
 <ReservationTitle value={"날짜"}>
  <StepNavigation labelArray={['투숙객 선택', '날짜 선택', '객실 선택']}></StepNavigation>
 </ReservationTitle>
  )

}

export default Reservation2;