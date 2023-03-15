import styled from 'styled-components/macro';
import theme from 'style/theme';
export const ClosingSubDesc = ({ children }) => {
  return (
    <StyledClosingSubDesc>
      {children}
    </StyledClosingSubDesc>
  )
}

const StyledClosingSubDesc = styled.span`
  display: block;
  margin-top: 1.875rem;
  padding:0 3.5rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: ${theme.gray};
  text-align: center;
`