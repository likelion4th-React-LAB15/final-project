import styled from 'styled-components/macro';
import theme from 'style/theme'

export const BuildingLayout = ({ children }) => {
  return (
    <StyledBuildingLayout>
      <StyledBuildingTitle>건물 배치도</StyledBuildingTitle>
      <StyledBuildingImg>
        {children}
      </StyledBuildingImg>

    </StyledBuildingLayout>
  )
}

const StyledBuildingLayout = styled.section`
  position: relative;
  max-width: 87.5rem;
  margin: 21.25rem auto 0 auto;
`
const StyledBuildingTitle = styled.h2`
  max-width: 63.125rem;
  margin: 0 auto;
  padding: 4.75rem 0 0 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: ${theme.blue};
`
const StyledBuildingImg = styled.section`
  width: 100%;
  margin-top: 3.75rem;
  padding: 1.25rem;
  background-color: #f9f9f9;
  border-radius: 3.75rem;
  img{
    width: 100%;
  }
`