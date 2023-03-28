import styled from 'styled-components';
import theme from 'style/theme';

function Step({ index, label, isActive = false }) {
  return (
    <StepBlock>
      <CircleWrapper>
        {isActive ? (
          <CircleActive></CircleActive>
        ) : (
          <Circle>{index + 1}</Circle>
        )}

        <CircleShadow></CircleShadow>
        <Bar></Bar>

        {isActive ? <ProgressBar progress={100} /> : null}
      </CircleWrapper>
      <span>{label}</span>
    </StepBlock>
  );
}

const StepBlock = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.textBase};
  line-height: 1.188rem;
  text-align: center;
  color: ${theme.blue};
  position: relative;
`;

const CircleWrapper = styled.div`
  padding: 0rem 9.698rem;
  margin-bottom: 1.608rem;
`;

const Circle = styled.div`
  width: 5.166rem;
  height: 5.166rem;
  background-color: #8e96de;
  color: ${theme.white};
  border-radius: 50%;
  line-height: 5.166rem;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
`;
const CircleActive = styled.div`
  width: 5.166rem;
  height: 5.166rem;
  background: url(${require('./../../assets/icons/checked.png')}) ${theme.blue}
    no-repeat center center;
  color: ${theme.white};
  border-radius: 50%;
  line-height: 5.166rem;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
`;

const CircleShadow = styled.div`
  width: 6.382rem;
  height: 6.382rem;
  background-color: #e5ecff;
  position: absolute;
  border-radius: 50%;
  top: -0.608rem;
  left: 9.125rem;
  z-index: -1;
`;

const Bar = styled.div`
  content: '';
  width: 100%;
  height: 0.313rem;
  position: absolute;
  top: 2.583rem;
  left: 0rem;
  background-color: #e5ecff;
  z-index: -100;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  height: 0.313rem;
  position: absolute;
  top: 2.583rem;
  left: 0;
  background-color: ${theme.blue};
  z-index: -10;
  transition: width 0.3s ease-in-out;
`;

export default Step;
