import { useId } from "react";
import styled from 'styled-components/macro'
import theme from 'style/theme'

const StyledButton = styled.button`
  width: 340px;
  height: 50px;
  color: ${theme.white};
  background-color: ${theme.blue};
  margin: ${theme.spacingXs} 0;
  border-radius: 50px;
  border: none;
`

const UserButton = ({type="button", children, ...rest}) => {
  return <StyledButton type={type}>{children}</StyledButton>
}



export default UserButton;