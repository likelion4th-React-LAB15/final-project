import styled from 'styled-components/macro';
import theme from 'style/theme';

export const SectionTitle = ({ children }) => {

  return (
    <StyledSectionTitle>
      {children}
    </StyledSectionTitle>
  )
}

const StyledSectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.125rem;
  text-align: center;
  color: ${theme.blue};
  & + p{
    margin-top: 2.625rem;
  }
`
