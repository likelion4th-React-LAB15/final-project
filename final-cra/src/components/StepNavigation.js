import Step from 'components/Step.js';
import styled from 'styled-components';

const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.25rem;
  position: relative;
`;

function StepNavigation(props) {
  return (
    <StepWrapper>
      {props.labelArray.map((item, index) => {
        if (props.page === 'reservation3' && index < 2) {
          return (
            <Step key={index} index={index} label={item} isActive={true} />
          );
        } else if (props.page === 'reservation2' && index < 1) {
          return (
            <Step key={index} index={index} label={item} isActive={true} />
          );
        } else {
          return <Step key={index} index={index} label={item}></Step>;
        }
      })}
    </StepWrapper>
  );
}

export default StepNavigation;
