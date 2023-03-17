import styled from "styled-components";
import theme from 'style/theme';

const StepBlock = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.textBase};
  line-height: 1.188rem;
  text-align: center;
  color: ${theme.blue};
  position: relative;
`

const CircleWrapper = styled.div`
  padding: 0rem 9.698rem;
  margin-bottom: 1.608rem;
 

  &::after{
    content:'';
    width: 100%;
    height:0.313rem;
    position:absolute;
    top: 2.583rem;
    left: 0rem;
    background-color: #E5ECFF;
    z-index: -1;
  }
`

const Circle = styled.div`
  width: 5.166rem;
  height: 5.166rem;
  background-color: #8E96DE;
  color: white;
  border-radius: 50%;
  line-height: 5.166rem;
  text-align:center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
  position:relative;
`

const Circle1 = styled.div`
  width: 6.382rem;
  height: 6.382rem;
  background-color: #E5ECFF;
  position:absolute;
  border-radius: 50%;
  top:-0.608rem;
  left:9.125rem;
  z-index:-1;
`

function Step(props){
  return (
    <StepBlock>
      <CircleWrapper>
        <Circle>{props.index+1}</Circle>
        <Circle1></Circle1>
      </CircleWrapper>
      <span>{props.label}</span>
    </StepBlock>
  )
}

export default Step;