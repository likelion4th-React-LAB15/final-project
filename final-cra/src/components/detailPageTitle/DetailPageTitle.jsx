import styled from 'styled-components/macro';
import theme from 'style/theme';
export const DetailPageTitle = ({ children }) => {
  return <StyledDetailPageTitle>{children}</StyledDetailPageTitle>;
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
`;
