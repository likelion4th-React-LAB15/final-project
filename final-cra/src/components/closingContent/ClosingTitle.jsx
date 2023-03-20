import styled from 'styled-components/macro';
export const ClosingTitle = ({ children }) => {
  return (
    <StyledClosingTitle>
      {children}
    </StyledClosingTitle>
  )
}

const StyledClosingTitle = styled.h3`
  margin-bottom: 2.1875rem;
  font-family: 'Poppins', sans-serif;
  font-size: 3.4375rem;
  font-weight: 700;
  text-align: center;
`