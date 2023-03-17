import styled from "styled-components"
import theme from "style/theme"

export const UserLabel = ({children, required}) => {
  return(
    <StyledLabel required={required} >{children}</StyledLabel>
  )
}

const StyledLabel = styled.p`
  display: inline-block;
  width: 8.75rem;
  margin-top: 1.5rem;
  top: -0.125rem;
  right: -0.125rem;
  &::after{
    content: "${({required}) => (required ? '*' : '')}";
    color: ${theme.pink};
    position: relative;
    top: -0.25rem;
    right: -0.125rem;
  }
`