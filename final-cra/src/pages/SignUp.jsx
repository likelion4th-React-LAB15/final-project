import { UserForm, PrimaryButton, UserSignUpInput, UserRadio, UserCheckBox, UserLabel, UserBirth} from 'components/user';
import Title from 'components/Title';
import Border from 'components/Border';
import styled from 'styled-components';
import theme from 'style/theme';
import Arrow from 'assets/icons/btn-arrow-next.svg'
import { useRef, useState } from 'react';
import { useSignUp, useAuthState } from '@service/auth';
import { useCreateAuthUser } from '@service/firestore';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  nickname: '',
  phone: '',
  gender: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  termsOfUse: false,
  termsOfPersonalInfo: false,
  termsOfAge: false,
};

export const SignUp = () => {

  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState();
  const [ emailInput, setEmailInput] = useState('');
  

  console.log(user);

  const formStateRef = useRef(initialFormState);

  const handleReset = () => {
    console.log('reset');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm, nickname, phone, gender, birthYear, birthMonth, birthDay, termsOfUse, termsOfPersonalInfo, termsOfAge } = formStateRef.current;

    //유효성 검사
    if (!name || name.trim().length < 2) {
      console.error('이름은 2글자 이상 입력해야 해요');
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      console.error('입력한 패스워드를 다시 확인하세요.');
      return;
    }

    const user = await signUp(email, password, name );
    await createAuthUser(user, {name, nickname, phone, gender, birthYear, birthMonth, birthDay, termsOfUse, termsOfPersonalInfo, termsOfAge});

    console.log('회원가입 및 users 콜렉션에 user 데이터 생성');
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

    if(name==='email'){
      setEmailInput(value);
    }

  };

  if (isLoading) {
    return <div role="alert">페이지를 준비 중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  return (
    <StyledSection onSubmit={handleSubmit} onReset={handleReset}>
        <Title>회원가입</Title>
        <StyledRequire>필수입력사항</StyledRequire>
        <Border/>
        <UserSignUpInput name={'email'} type={'email'} button={'중복확인'} placeholder={'dif@example.com'} onChange={handleChangeInput} value={emailInput} visible required>이메일</UserSignUpInput>
        <UserSignUpInput name={'password'} type={'password'} placeholder={'비밀번호를 입력해주세요'} onChange={handleChangeInput}required>비밀번호</UserSignUpInput>
        <UserSignUpInput name={'passwordConfirm'} type={'password'} placeholder={'비밀번호를 한번 더 입력해주세요'} onChange={handleChangeInput} required>비밀번호 확인</UserSignUpInput>
        <UserSignUpInput name={'name'} placeholder={'이름을 입력해주세요'} onChange={handleChangeInput} required>이름</UserSignUpInput>
        <UserSignUpInput name={'nickname'} button={'중복확인'} placeholder={'닉네임을 입력해주세요'} onChange={handleChangeInput} visible required>닉네임</UserSignUpInput>
        <UserSignUpInput name={'phone'} maxLength="11" button={'인증번호 받기'} placeholder={'숫자만 입력해주세요.'} onChange={handleChangeInput} visible required number>휴대폰</UserSignUpInput>
        <UserLabel>성별</UserLabel>
        <StyledGender>
          <UserRadio name='gender' onChange={handleChangeInput} >남자</UserRadio>
          <UserRadio name='gender' onChange={handleChangeInput} >여자</UserRadio>
          <UserRadio name='gender' onChange={handleChangeInput} >선택안함</UserRadio>
        </StyledGender>
        <UserLabel required>생년월일</UserLabel>
        <UserBirth onChange={handleChangeInput} />
        <Border slim/>
        <UserLabel required>이용약관동의</UserLabel>
        <StyledUl>
          <StyledList>
            <UserCheckBox name='allCheck' allcheck >전체 동의합니다.</UserCheckBox>
            <StyledText>선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</StyledText>
          </StyledList>
          <StyledList>
            <StyledButton>약관보기</StyledButton><UserCheckBox onChange={handleChangeInput} name={'termsOfUse'} >이용약관 동의 여부 (필수)</UserCheckBox>
          </StyledList>
          <StyledList>
            <StyledButton>약관보기</StyledButton><UserCheckBox onChange={handleChangeInput} name={'termsOfPersonalInfo'} >개인정보 수집 이용 여부 (필수)</UserCheckBox>
            </StyledList>
          <StyledList>
            <StyledButton>약관보기</StyledButton>
            <UserCheckBox onChange={handleChangeInput} name={'termsOfAge'} >19세 이상 확인 (필수)</UserCheckBox>
          </StyledList>          
        </StyledUl>
        <Border slim gray/>
        <StyledPrimaryButton type="submit">가입하기</StyledPrimaryButton>
    </StyledSection>
  )
}


const StyledSection = styled(UserForm)`
  width: 40rem;
  margin: 6.25rem auto;
  display: flex;
  flex-flow: column nowrap;
`
const StyledGender = styled.div`
  width: 20.8125rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  top: -1.5rem;
  left: 8.75rem;
`

const StyledList = styled.li`
  position: relative;
  width: 28.125rem;
`

const StyledButton = styled.button`
  width: 3.75rem;
  position: absolute;
  right: 2rem;
  top: .5rem;
  background-color: white;
  border: none;
  color: ${theme.blue};
  font-size: ${theme.textSm};
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-size: 0.375rem;
  background-position: right top 40%;

`

const StyledText = styled.p`
  font-size: ${theme.textSm};
  color: ${theme.gray};
  position: relative;
  top: -0.625rem;
  left: 2.0625rem;

`

const StyledUl = styled.ul`
  position: relative;
  left: 8.75rem;
  top: -1.25rem;
`

const StyledPrimaryButton = styled(PrimaryButton)`
  margin: 2.5rem auto 0 auto;
`

const StyledRequire = styled.p`
  position: relative;
  left: 560px;
  padding-bottom: .3125rem;
  font-size: ${theme.textSm};
  &::before{
    content: '*';
    font-size: ${theme.textBase};
    color: ${theme.pink};
    position: relative;
    top: -0.125rem;
    left: -0.125rem;
  }
`
