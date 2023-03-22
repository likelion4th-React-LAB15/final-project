import styled from 'styled-components/macro';
import theme from 'style/theme';

export const CcpLinkButton = ({ children }) => {

  return (
    <StyledCcpLinkButton>
      {children}
    </StyledCcpLinkButton>
  )
}

const StyledCcpLinkButton = styled.a`
  display: block;
  width: 18rem;
  height: 3.4375rem;
  line-height: 3.4375rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: ${theme.indigo};
  border: 2px solid ${theme.indigo};
  border-radius: 1.875rem;
  background-color: ${theme.white};
  transition: all 0.3s;
  margin:5rem auto;
  &:hover{
    background-color: ${theme.indigo};
    color: ${theme.white};
  }
`