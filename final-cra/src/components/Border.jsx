import styled from "styled-components"
import theme from "style/theme"

const Border = ({slim, gray}) => {
  return <StyledBorder slim={slim} gray={gray}></StyledBorder>
}

const StyledBorder = styled.div`
  width: inherit;
  height: 1px;
  border-width: ${({slim}) => (slim ? '.0313rem' : '.0625rem')} ;
  border-style: solid;
  border-color: ${({gray}) => (gray ? theme.gray : theme.black)};
`

export default Border;