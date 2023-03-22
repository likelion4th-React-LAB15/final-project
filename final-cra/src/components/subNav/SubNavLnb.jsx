import styled from 'styled-components/macro';
import theme from 'style/theme';
import arrowDownWhite from 'assets/icons/btn-arrow-down-white.svg';

export const SubNavLnb = ({ children }) => {

  return (
    <StyledSubNavLnb>
      {children}
    </StyledSubNavLnb>
  )
}

const StyledSubNavLnb = styled.ul`
  height: 3.875rem;
  padding:.625rem 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap:1.875rem;
  .subNavTitle{
    align-self: center;
  }
  .subNavTitle:hover{
    ul{
      visibility: visible;
      opacity: 1;
    }
  }
  .subNavTitle>a{
    position: relative;
    padding:0 1.5rem 0 0;
    font-family: 'Poppins' sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${theme.white};
  }
  .subNavTitle:first-child>a{
    padding: 0;
  }
  .subNavTitle:first-child>a::after{
    display: none;
  }
  .subNavTitle:first-child img{
    height: 1.625rem;
  }
  .subNavTitle>a::after{
    content: "";
    position: absolute;
    width: .75rem;
    height: .4375rem;
    top:50%; right:0;
    transform: translateY(-50%) rotate(0deg);
    background-image: url(${arrowDownWhite});
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s;
  }
  .subNavTitle:hover a::after{
    transform: translateY(-50%) rotate(180deg);
  }
`