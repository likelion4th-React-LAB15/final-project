import styled from 'styled-components/macro';
import theme from 'style/theme';

export const SubNavItemList = ({ children }) => {

  return (
    <StyledSubNavItemList>
      {children}
    </StyledSubNavItemList>
  )
}

const StyledSubNavItemList = styled.ul`
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  background-color: #fff;
  padding: 1.5625rem 1.125rem;
  border-radius: 1.25rem;
  border: .125rem solid ${theme.blue};
  box-shadow: .3125rem .3125rem .625rem rgba(0,0,0,0.16);
  text-align: left;
  a{
    display: block;
    padding: .5rem 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: ${theme.textBase};
    color: ${theme.blue};
  }
  a:hover{
    color: ${theme.pink};
  }
`