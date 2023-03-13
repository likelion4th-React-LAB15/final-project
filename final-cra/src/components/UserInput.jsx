import { useId } from "react";
import styled from 'styled-components/macro'
import theme from 'style/theme'

const StyledInput = styled.input`
  width: 340px;
  height: 50px;
  margin: ${theme.spacingXs} 0;
  border: 1px solid #A6A6A6;
  border-radius: 50px;
  text-indent: ${theme.spacingBase};
`

const UserInput = ({type="text", children, labelClass, inputClass, placeholder, ...rest}) => {
  const UserInputId = useId();
  return (
    <>
      <label className={labelClass} htmlFor={UserInputId} >{children}</label>
      <StyledInput className={inputClass} type={type} id={UserInputId} placeholder={placeholder}></StyledInput>
    </>
  )
}

export default UserInput;