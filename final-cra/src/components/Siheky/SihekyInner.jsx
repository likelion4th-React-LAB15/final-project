import styled from 'styled-components/macro';
import SihekyContents from 'components/Siheky/SihekyContents';
import SihekyAniObj from 'components/Siheky/SihekyAnimationObject';

function SihekyInner() {
  return (
    <>
      <StyledSihekyInner>
        <SihekyContents />
        <SihekyAniObj />
      </StyledSihekyInner>
    </>
  );
}

const StyledSihekyInner = styled.div`
  max-width: 73.75rem;
  min-height: 43.75rem;
  margin: 0 auto;
  position: relative;
`;

export default SihekyInner;
