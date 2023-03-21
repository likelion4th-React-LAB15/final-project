import styled from 'styled-components/macro';
export const ClosingContents = ({ children }) => {
  return (
    <StyledClosingContents>
      {children}
    </StyledClosingContents>
  )
}

const StyledClosingContents = styled.div`
  width: 73.75rem;
  margin: 0 auto;
  text-align: center;
`