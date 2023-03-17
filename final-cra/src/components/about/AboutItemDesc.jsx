import styled from 'styled-components/macro';
import theme from 'style/theme';
export const AboutItemDesc = ({ children }) => {
  return (
    <StyledAboutItemDesc className='moveText'>
      {children}
    </StyledAboutItemDesc>
  )
}

const StyledAboutItemDesc = styled.div`
  width: calc(100% - 41.25rem);
  display: flex;
  flex-direction: column;
  padding-left: 0.625rem;
  h3{
    width: 31.25rem;
    font-size: 4.125rem;
    font-weight: 700;
  }
  strong{
    display: inline-block;
  }
  .bold{
    padding-right: 1.25rem;
    color: ${theme.blue};
  }
  .line{
    color: transparent;
    font-family: 'Poppins',Sans-serif;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.blue};
  }
  p{
    max-width: 26.25rem;
    margin: 2.1875rem 0 0 2.5rem;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: ${theme.gray};
  }
`