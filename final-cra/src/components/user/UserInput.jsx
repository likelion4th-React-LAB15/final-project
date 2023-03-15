import { useId } from "react";
import styled from 'styled-components/macro'
import theme from 'style/theme'
import {SecondaryButton}from 'components/user'

export const UserLogInInput = ({type="text", children, labelClass, inputClass, placeholder, ...rest}) => {
  const UserInputId = useId();
  return (
    <>
      <StyledLogInInput className={inputClass} type={type} id={UserInputId} placeholder={placeholder} {...rest}></StyledLogInInput>
      <StyledLabel className={labelClass} htmlFor={UserInputId} >{children}</StyledLabel>
    </>
  )
}

export const UserSignUpInput = ({type="text", children, labelClass, inputClass, placeholder, button, visible, required, ...rest}) => {
  const UserInputId = useId();
  return (
    <>
    <StyledSection>
      <StyledLabel className={labelClass} htmlFor={UserInputId} required={required}>{children}</StyledLabel>
      <StyledSignUpInput className={inputClass} type={type} id={UserInputId} placeholder={placeholder} {...rest}></StyledSignUpInput>
      <SecondaryButton visible={visible} secondary>{button}</SecondaryButton>
    </StyledSection>
    </>
    
  )
}

const StyledLogInInput = styled.input`
  width: 21.25rem;
  height: 3.125rem;
  margin: ${theme.spacingXs} 0;
  border: 0.0625rem solid #A6A6A6;
  border-radius: 3.125rem;
  text-indent: ${theme.spacingBase};
`

const StyledLabel = styled.label`
  display: flex;
  align-self: center;
  white-space: nowrap;
  width: 8.75rem;
  &::after{
    content: '*';
    color: ${theme.pink};
    position: relative;
    top: -0.25rem;
    right: -0.125rem;
  }
`

const StyledSignUpInput = styled.input`
  width: 20.8125rem;
  height: 2.75rem;
  margin: ${theme.spacingMd} ${theme.spacingXs} ${theme.spacingMd} 0;
  border: 0.0625rem solid #A6A6A6;
  border-radius: 3.125rem;
  text-indent: ${theme.spacingBase};
`

const StyledSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
`