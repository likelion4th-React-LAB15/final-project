import theme from "style/theme";
import styled from 'styled-components/macro';


export function MarqueeText({ marqueeLeft, marqueeRight = false, children }) {
  return (
    <StyledMarqueeTextContainer className={marqueeRight ? 'marqueeRight' : 'marqueeLeft'}>
      <StyledMarqueeText>
        {children}
      </StyledMarqueeText>
    </StyledMarqueeTextContainer>
  )
}

const StyledMarqueeTextContainer = styled.section`
  width: 100%;
  min-height: 11.25rem;
  position: relative;
  margin: 5.3125rem 0;
  overflow: hidden;
  &.marqueeLeft h2{
    left: 0;
  }
  &.marqueeRight h2{
    right: 0;
  }
`

const StyledMarqueeText = styled.h2`
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  width: max-content;
  display: flex;
  flex-flow: row nowrap;
  gap: 1.25rem;
  font-family: 'Poppins',Sans-serif;
  font-weight: 700;
  font-size: 6.4375rem;
  text-transform: uppercase;  
  strong{
    color: ${theme.blue};
  }
  em{
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.blue};
  }
`
