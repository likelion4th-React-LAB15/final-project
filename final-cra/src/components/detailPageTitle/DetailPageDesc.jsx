import styled from 'styled-components/macro';
import theme from 'style/theme';
export const DetailPageDesc = ({ children }) => {
  return <StyledDetailPageDesc>{children}</StyledDetailPageDesc>;
};

const StyledDetailPageDesc = styled.p`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${theme.gray};
  line-height: 1.875rem;
  text-align: center;
`;
