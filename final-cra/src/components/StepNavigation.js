import Step from "components/Step.js";
import styled from "styled-components";

const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.25rem;
`

function StepNavigation(props){
  return (
    <StepWrapper>
      {props.labelArray.map((item, index) => 
      <Step key={index} index={index} label = {item}></Step>
      )}
    </StepWrapper>
  )
}

export default StepNavigation;