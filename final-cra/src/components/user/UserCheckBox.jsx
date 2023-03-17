import styled from "styled-components"
import { useId, useState } from "react";
import theme from "style/theme";
import Checkbox from 'assets/icons/check.svg'

export const UserCheckBox = ({checked,  children, ...rest}) => {
  const UserInputId = useId();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <StyledDiv >
      <StyledCheckbox type="checkbox" id={UserInputId} onClick={()=>setIsChecked(!isChecked)} {...rest}></StyledCheckbox>
      <StyledCheckLabel className ={isChecked ? 'checked' : ''} htmlFor={UserInputId} checked={checked}></StyledCheckLabel>
      <StyledLabel htmlFor={UserInputId} >{children}</StyledLabel>
    </StyledDiv>)
}

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
`

const StyledCheckbox = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  appearance: none;
  border-radius: 50%;
  margin-bottom: .92rem;
`

const StyledCheckLabel = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-self: center;
  background-image: url(${Checkbox});
  /* background-position: ${({checked}) => (checked ? '-0.5rem -2.5rem' : '-0.5rem -0.5rem')} ; */
  background-position: -0.5rem -0.5rem ;
  background-color: ${theme.white};
  white-space: nowrap;
  border: none;
  border-radius: 50%;
  margin-right: 2rem;
  margin-bottom: ${theme.spacingSm};
  position: absolute;
  top: 0.125rem;
  left: 0.1875rem;
  &.checked {
    background-position: -0.5rem -2.5rem;
  }
`
const StyledLabel = styled.label`
  display: flex;
  align-self: center;
  white-space: nowrap;
  margin-bottom: 0.6875rem;
  position: absolute;
  left: 2rem;
  top: 0.5rem;
`