import styled from 'styled-components/macro';
import theme from 'style/theme';
export const ClosingDesc = ({ children }) => {
  return (
    <StyledClosingDesc>
      {children}
    </StyledClosingDesc>
  )
}

const StyledClosingDesc = styled.p`
  margin-bottom: 1.25rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${theme.indigo};
`