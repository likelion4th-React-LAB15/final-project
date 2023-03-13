import UserInput from 'components/UserInput';
import UserForm from 'components/UserForm';
import UserButton from 'components/UserButton';
import styled from 'styled-components/macro'
import Title from 'components/Title';
import theme from 'style/theme';

const StyledSection = styled.section`
  width:  340px;
  margin: 100px auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  font-size: ${theme.textSm};
  margin: 10px 0 40px 0;
`

const StyledList = styled.li`
  &::before{
    padding: 0 4px;
    content: '|'
  }
`

const StyledSpan = styled.span`
  color: #898989;
`

const StyledLink = styled.a`
  display: inline-block;
  border-bottom: 1px solid ${theme.blue};
  font-weight: bold;
  color: ${theme.blue};
  margin: ${theme.spacingMd} 0 0 10px;
`

const LogIn = () => {

  return (
        <StyledSection>
          <Title>로그인</Title>
          <UserForm>
            <fieldset>
              <legend>로그인 폼</legend>
              <UserInput labelClass={'a11y-hidden'} placeholder={'아이디를 입력해주세요'}>아이디</UserInput>
              <UserInput labelClass={'a11y-hidden'} type={'password'} placeholder={'비밀번호를 입력해주세요'}>비밀번호</UserInput>
            </fieldset>
            <StyledUl>
              <li><a href="#">아이디 찾기</a></li>
              <StyledList><a href="#">비밀번호 찾기</a></StyledList>
            </StyledUl>
             <UserButton>로그인</UserButton>
          </UserForm>
        <StyledSpan>아직 가입하지 않으셨나요?<StyledLink href="#">회원가입</StyledLink></StyledSpan>
      </StyledSection>
  )
}

export default LogIn;