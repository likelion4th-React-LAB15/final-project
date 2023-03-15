import styled from "styled-components"
import theme from "style/theme"

export const UserLabel = ({children}) => {
  return(
    <StyledLabel>{children}</StyledLabel>
  )
}

const StyledLabel = styled.p`
  display: inline-block;
  width: 8.75rem;
  margin-top: 1.5rem;
  top: -0.125rem;
  right: -0.125rem;
  &::after{
    content: '*';
    color: ${theme.pink};
    position: relative;
    top: -0.25rem;
    right: -0.125rem;
  }
`