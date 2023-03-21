import styled from 'styled-components/macro';
import theme from 'style/theme';

export const ServiceList = ({ children }) => {

  return (
    <StyledServiceList>
      {children}
    </StyledServiceList>
  )
}

const StyledServiceList = styled.ul`
  display: flex;
  width: 100%;
  max-width: 73.75rem;
  margin: 5.625rem auto 0 auto;
  flex-flow: row wrap;
  justify-content: space-between;
  color: ${theme.gray};
  li{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: calc(100%/2 - 1rem);
    padding: 3.375rem 0 2.875rem;
    margin-bottom: 1.25rem;
    border: 1px solid #ccc;
    background-color: ${theme.white};
    border-radius: 1.875rem;
  }
  .icon{
    width: 10.125rem;
    flex-shrink: 0;
    text-align: center;
  }
  .icon img{
    vertical-align: middle;
    width: 3.25rem;
  }
  .text{
    width: calc(100% - 10.125rem);
  }
  .text h3{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: .625rem;
    color: ${theme.indigo};
    word-break: break-all;
  }
  .text p{
    position: relative;
    padding-left:1rem;
    padding-right:2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.0625rem;
    line-height: 1.5rem;
    color: #31356d;
    word-break: break-all;
  }
  .text span{
    position: absolute;
    top:0;
    left:0;
  }
`
