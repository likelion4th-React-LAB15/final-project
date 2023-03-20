import styled from 'styled-components/macro';

export const AboutItemImage = ({ children }) => {
  return (
    <StyledAboutItemImage className='moveImage'>
      {children}
    </StyledAboutItemImage>
  )
}

const StyledAboutItemImage = styled.div`
  position: relative;
  top: 10rem;
  width: 25.625rem;
  height: 31.25rem;
  margin: 0 4.75rem 0 4.75rem;
  border-radius: 6.25rem;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top:0;
    left:0;
  }
`