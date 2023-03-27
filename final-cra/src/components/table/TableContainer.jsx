import styled from 'styled-components/macro';

export const TableContainer = ({ children }) => {

  return (
    <StyledTableContainer>
      {children}
    </StyledTableContainer>
  )
}

const StyledTableContainer = styled.section`
  width: 100%;
  max-width: 73.75rem;
  padding:0 5.3125rem;
  margin:0 auto;
  table + h2{
    margin-top:6.25rem;
  }
`
