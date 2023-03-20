import styled from "styled-components";
import theme from 'style/theme';
import { Link } from "react-router-dom";

const Back = styled.button`
  width: 21.25rem;
  height: 3.5rem;
  border-radius: 1.875rem;
  background-color: white;
  border: solid 2px ${theme.blue};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.textBase};
  line-height: 1.188rem;
  color: ${theme.blue};
  
  margin-top: 5.625rem;
`;

function BackButton(props){
  return (
    <Link to={`/${props.id}`}>
      <Back>{props.value}</Back>
    </Link>
  )
}

export default BackButton;
