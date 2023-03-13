import styled from 'styled-components/macro'
import theme from 'style/theme'

const StyledTitle = styled.h2`
    width: inherit;
    font-size: 34px;
    color: ${theme.blue};
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
`

const Title = ({children, ...rest}) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title;