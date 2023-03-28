import styled from 'styled-components';
import theme from 'style/theme';
import { Link } from 'react-router-dom';

function ContinueButton(props) {
  return (
    <Link to={`/${props.id}`}>
      <Continue>{props.value}</Continue>
    </Link>
  );
}

const Continue = styled.button`
  width: 21.25rem;
  height: 3.5rem;
  background-color: ${theme.blue};
  border-radius: 1.875rem;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.textBase};
  line-height: 1.188rem;
  color: #ffffff;
`;

export default ContinueButton;