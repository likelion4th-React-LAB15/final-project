import styled from 'styled-components/macro';

export const AboutItem = ({ children }) => {
  return (
    <StyledAboutItem>
      {children}
    </StyledAboutItem>
  )
}

const StyledAboutItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10rem 0;
  &:first-child{
    padding-top:0;
  }
  &:nth-child(2n){
    flex-direction: row-reverse;
  }
  &:nth-child(2n) .test{
    right:-12.5rem;
  }
  & + li{
    margin-top: 13.4375rem;
  }
  &:last-child{
    margin-bottom: 13.4375rem;
  }
`