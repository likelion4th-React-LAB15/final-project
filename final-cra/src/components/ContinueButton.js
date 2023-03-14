import styled from "styled-components";

const Continue = styled.button`
  width: 21.25rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.blue};
  border-radius: 1.875rem;
  border:none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.theme.textBase};
  line-height: 1.188rem;
  color: #FFFFFF;
  margin: auto;
  display: block;
  margin-top: 5.625rem;
`

function ContinueButton(props){
  return (
  <Continue>{props.value}</Continue>
  )
}

export default ContinueButton;