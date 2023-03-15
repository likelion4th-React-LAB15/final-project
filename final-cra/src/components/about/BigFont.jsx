
import styled from 'styled-components/macro';
import theme from 'style/theme';

export const BigFont = ({ children, idx, color = 'pink', ...rest }) => {


  return (
    <StyledBigFont className={`${(idx % 2 === 0) ? 'left' : 'right'} ${color}`}>
      {children}
    </StyledBigFont>
  )
}

const StyledBigFont = styled.div`
  position: absolute;
  bottom:-15.625rem;
  font-size: 18.75rem;
  font-weight: 700;
  color: ${theme.blue};

  &.left{
    left:50%;
  }
  &.right{
    right:50%;
  }
  &.pink{
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.pink};
  }
  &.orange{
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.orange};
  }
  &.blue{
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.blue};
  }
`