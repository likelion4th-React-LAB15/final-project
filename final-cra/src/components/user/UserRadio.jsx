
import styled from 'styled-components'
import { useId, useState } from 'react';
import Radio from 'assets/icons/radio.svg'
import theme from 'style/theme';


export const UserRadio = ({children, labelClass, ...rest}) => {
  const UserInputId = useId();
  const [isChecked, setIsChecked] = useState(false);
  return(
        <StyledWrapper>
           <StyledRadio name='gender' type='radio' id={UserInputId} onClick={()=>setIsChecked(!isChecked)} value={children} {...rest} ></StyledRadio>
           <StyledCheckLabel className ={isChecked ? 'checked' : ''} htmlFor={UserInputId} ></StyledCheckLabel>
           <StyledLabel htmlFor={UserInputId}>{children}</StyledLabel>
        </StyledWrapper>
        
  )
}

const StyledWrapper = styled.div`
  width: 40rem;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
`

const StyledRadio = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  appearance: none;
  border-radius: 50%;
`

const StyledCheckLabel = styled.label`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-self: center;
  background-image: url(${Radio});
  background-position: -0.45rem -0.43rem;
  background-color: ${theme.white};
  white-space: nowrap;
  border:none;
  border-radius: 50%;
  margin-right: 2rem;
  position: absolute;
  top: 0.125rem;
  left: 0.25rem;
  &.checked {
    background-position: -0.45rem -2.5rem;
  }
`

const StyledLabel = styled.label`
  display: flex;
  align-self: center;
  white-space: nowrap;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
`