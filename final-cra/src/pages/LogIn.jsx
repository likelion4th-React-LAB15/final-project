import UserInput from 'components/UserInput';
import UserForm from 'components/UserForm';
import UserButton from 'components/UserButton';
import styled from "styled-components";


const LogIn = () => {

  return (
        <section className="login">
          <h2 className="title">로그인</h2>
          <UserForm>
            <fieldset>
              <legend>로그인 폼</legend>
              <UserInput labelClass={'a11y-hidden'}>아이디</UserInput>
              <UserInput labelClass={'a11y-hidden'} type={'password'} >비밀번호</UserInput>
            </fieldset>
            <ul>
              <li><a href="/">아이디 찾기</a></li>
              <li><a href="/">비밀번호 찾기</a></li>
            </ul>
             <UserButton>로그인</UserButton>
          </UserForm>
        <span>아직 가입하지 않으셨나요?</span><a href="/" className="registerButton">회원가입</a>
      </section>
  )
}

export default LogIn;