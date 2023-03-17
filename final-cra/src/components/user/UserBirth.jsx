import { UserSignUpInput } from "components/user"
import styled from "styled-components"
import theme from 'style/theme'

export const UserBirth = ({...rest}) => {
  return(
    <StyledBirth>
      <StyledBirthInput name={'birthYear'} labelClass={'a11y-hidden'} placeholder={'YYYY'} maxLength="4" {...rest}>연도 입력(4글자)</StyledBirthInput> 
      <StyledBirthInput name={'birthMonth'} labelClass={'a11y-hidden'} placeholder={'MM'} maxLength="2" {...rest}>월 입력(2글자)</StyledBirthInput>
      <StyledBirthInput name={'birthDay'} labelClass={'a11y-hidden'} placeholder={'DD'} maxLength="2" {...rest}>일 입력(2글자)</StyledBirthInput>
    </StyledBirth>
  )
}

const StyledBirth = styled.div` 
    width: 21.25rem;
    height: 3.125rem;
    margin: ${theme.spacingXs} 0;
    border: 0.0625rem solid #A6A6A6;
    border-radius: 3.125rem;
    background-color: ${theme.white};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8.75rem;
    top: -2.5rem;
    `
const StyledBirthInput = styled(UserSignUpInput)`
  width: 4rem;
  height: 2rem;
  text-indent: 0;
  border-radius: 0;
  border: none;
  text-align: center;
`
