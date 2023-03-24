import styled from 'styled-components/macro';
import theme from 'style/theme';
export const DetailPageTitle = ({ description, children }) => {
  return (
    <StyledDetailPageTitle className={description ? 'marginZero' : ''}>
      {children}
    </StyledDetailPageTitle>
  );
};

const StyledDetailPageTitle = styled.h2`
  display: block;
  margin-bottom: 5.875rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: ${theme.blue};
  line-height: 1.4;
  text-align: center;

  &.marginZero {
    margin-bottom: 0;
  }
  &.marginZero + p {
    margin-top: 1.375rem;
  }
`;
