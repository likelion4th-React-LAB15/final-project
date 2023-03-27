import styled from 'styled-components/macro';
import theme from 'style/theme';

export const DbbItem = ({ children }) => {

  return (
    <StyledDbbItem>
      {children}
    </StyledDbbItem>
  )
}

const StyledDbbItem = styled.li`
  width: calc(100%/3);
  padding:0 1.0625rem 2.5rem 1.0625rem;
  .DddImage{
    position: relative;
    width: 100%;
    min-height: 19.625rem;
  }
  .DddImage img{
    position: absolute;
    top:0; left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h3{
    font-family: 'Popppins', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${theme.indigo};
    line-height: 1.5rem;
    margin-top:1.875rem;
    padding: 0 1.875rem;
  }
  p{
    font-family: 'Popppins', sans-serif;
    font-weight: 500;
    font-size: 1.0625rem;
    color: #31356d;
    line-height: 1.5rem;
    margin-top: .625rem;
    padding: 0 1.875rem;
  }
  strong{
    display: block;
    color: #ff0000;
  }
`