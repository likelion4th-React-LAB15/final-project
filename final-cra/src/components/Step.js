import styled from "styled-components";

const StepBlock = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${props=> props.theme.textBase};
  line-height: 19px;
  text-align: center;
  color: ${props=> props.theme.blue};
  position: relative;
`

const CircleWrapper = styled.div`
  padding: 0px 155.17px;
  margin-bottom:25.72px;
 

  &::after{
    content:'';
    width: 100%;
    height:5px;
    position:absolute;
    top:41.33px;
    left:0px;
    background-color: #E5ECFF;
    z-index: -1;
  }
`

const Circle = styled.div`
  width: 82.66px;
  height: 82.66px;
  background-color: #8E96DE;
  color: white;
  border-radius: 50%;
  line-height: 82.66px;
  text-align:center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  position:relative;
`

const Circle1 = styled.div`
  width: 102.11px;
  height: 102.11px;
  background-color: #E5ECFF;
  position:absolute;
  border-radius: 50%;
  top:-9.72px;
  left:146px;
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