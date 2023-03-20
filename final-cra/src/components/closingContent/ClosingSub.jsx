import styled from 'styled-components/macro';
import theme from 'style/theme';
export const ClosingSub = ({ children }) => {
  return (
    <StyledClosingSub>
      {children}
    </StyledClosingSub>
  )
}

const StyledClosingSub = styled.span`
  display: block;
  margin-bottom: 1.25rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: ${theme.pink};
`