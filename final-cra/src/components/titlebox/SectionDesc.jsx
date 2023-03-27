import styled from 'styled-components/macro';
import theme from 'style/theme';

export const SectionDesc = ({ children }) => {

  return (
    <StyledSectionDesc>
      {children}
    </StyledSectionDesc>
  )
}

const StyledSectionDesc = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.875rem;
  text-align: center;
  color: ${theme.gray};
  & + p{
    margin-top:2.5rem;
  }
`
