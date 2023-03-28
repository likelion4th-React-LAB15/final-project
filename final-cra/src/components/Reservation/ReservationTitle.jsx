import styled from 'styled-components';
import theme from 'style/theme';

function ReservationTitle(props) {
  return (
    <TitleWrapper>
      <Guest>{props.value}</Guest>
      {props.children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  padding-top: 13.938rem;
`;

const Guest = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  color: ${theme.blue};
`;

export default ReservationTitle;
