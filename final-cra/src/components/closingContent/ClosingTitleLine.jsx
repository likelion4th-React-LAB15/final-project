import styled from 'styled-components/macro';
import theme from 'style/theme';
export const ClosingTitleLine = ({ children }) => {
  return (
    <StyledClosingTitleLine>
      {children}
    </StyledClosingTitleLine>
  )
}

const StyledClosingTitleLine = styled.strong`
  color: transparent;
  -webkit-text-stroke-width: 0.125rem;
  -webkit-text-stroke-color: ${theme.blue};
`