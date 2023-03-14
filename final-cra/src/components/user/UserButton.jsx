import styled from 'styled-components/macro'
import theme from 'style/theme'

const StyledButton = styled.button`
  width: 21.25rem;
  height: 3.125rem;
  color: ${theme.white};
  background-color: ${theme.blue};
  margin: ${theme.spacingXs} 0;
  border-radius: 3.125rem;
  border: none;
`

export const UserButton = ({type="button", children, ...rest}) => {
  return <StyledButton type={type} {...rest}>{children}</StyledButton>
}
