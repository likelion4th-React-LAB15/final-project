import { useId } from "react";
import styled from 'styled-components/macro'
import theme from 'style/theme'

const StyledInput = styled.input`
  width: 21.25rem;
  height: 3.125rem;
  margin: ${theme.spacingXs} 0;
  border: 0.0625rem solid #A6A6A6;
  border-radius: 3.125rem;
  text-indent: ${theme.spacingBase};
`

export const UserInput = ({type="text", children, labelClass, inputClass, placeholder, ...rest}) => {
  const UserInputId = useId();
  return (
    <>
      <label className={labelClass} htmlFor={UserInputId} >{children}</label>
      <StyledInput className={inputClass} type={type} id={UserInputId} placeholder={placeholder} {...rest}></StyledInput>
    </>
  )
}