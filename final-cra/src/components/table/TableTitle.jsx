import styled from 'styled-components/macro';
import theme from 'style/theme';

export const TableTitle = ({ children }) => {

  return (
    <StyledTableTitle>
      {children}
    </StyledTableTitle>
  )
}

const StyledTableTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: ${theme.blue};
`
