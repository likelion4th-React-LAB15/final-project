import styled from "styled-components";
import SihekyContents from "./SihekyContents";
import SihekyAniObj from "./SihrkyAnimationObject";

function SihekyInner() {

  return (
    <>
      <StyledSihekyInner>
        <SihekyContents />
        <SihekyAniObj />
      </StyledSihekyInner>
    </>
  )
}

const StyledSihekyInner = styled.div`
  max-width: 73.75rem; 
  min-height: 43.75rem;
  margin:0 auto;
  position: relative;
`

StyledSihekyInner.displayName = 'StyledSihekyInner';

export default SihekyInner