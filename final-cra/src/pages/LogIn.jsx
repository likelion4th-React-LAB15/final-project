import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserLogInInput, UserForm, Button } from 'components/user';
import styled from 'styled-components/macro';
import Title from 'components/Title';
import theme from 'style/theme';
import { useSignIn, useAuthState, useSignOut } from '@service/auth';
import Header from 'components/Header/Header';
import Footer from 'components/footer/Footer';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';

const initialFormState = {
  email: '',
  password: '',
};

export const LogIn = () => {
  const formStateRef = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;
    // console.log({ email, password });

    await signIn(email, password);
  };

  const handleSignOut = async () => {
    console.log('로그아웃');
    signOut();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  return (
    <>
      <Header />
      <SmoothScroll>
        <StyledSection>
          <Title>로그인</Title>
          <UserForm onSubmit={handleSignIn}>
            <fieldset>
              <legend>로그인 폼</legend>
              <UserLogInInput
                labelClass={'a11y-hidden'}
                name="email"
                type={'email'}
                placeholder={'이메일을 입력해주세요'}
                onChange={handleChangeInput}
              >
                이메일
              </UserLogInInput>
              <UserLogInInput
                labelClass={'a11y-hidden'}
                name="password"
                type={'password'}
                placeholder={'비밀번호를 입력해주세요'}
                onChange={handleChangeInput}
              >
                비밀번호
              </UserLogInInput>
            </fieldset>
            <StyledUl>
              <li>
                <a href="#">아이디 찾기</a>
              </li>
              <StyledList>
                <a href="#">비밀번호 찾기</a>
              </StyledList>
            </StyledUl>
            <Button type="submit" disabled={isLoadingSignIn} visible>
              로그인
            </Button>
          </UserForm>
          <StyledSpan>
            아직 가입하지 않으셨나요?
            <StyledLink to="/signup">회원가입</StyledLink>
          </StyledSpan>
        </StyledSection>
        <Footer />
      </SmoothScroll>
    </>
  );
};

const StyledSection = styled.section`
  width: 21.25rem;
  margin: 0 auto 6.25rem auto;
  padding-top: 13.938rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  font-size: ${theme.textSm};
  margin: 0.625rem 0 2.5rem 0;
`;

const StyledList = styled.li`
  &::before {
    padding: 0 0.25rem;
    content: '|';
  }
`;

const StyledSpan = styled.span`
  color: #898989;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  border-bottom: 0.0625rem solid ${theme.blue};
  font-weight: bold;
  color: ${theme.blue};
  margin: ${theme.spacingMd} 0 0 0.625rem;
`;
