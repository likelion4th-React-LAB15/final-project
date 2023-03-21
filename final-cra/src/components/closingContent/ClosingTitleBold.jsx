import styled from 'styled-components/macro';
import theme from 'style/theme';
export const ClosingTitleBold = ({ children }) => {
  return (
    <StyledClosingTitleBold>
      {children}
    </StyledClosingTitleBold>
  )
}

const StyledClosingTitleBold = styled.strong`
  color: ${theme.blue};
`