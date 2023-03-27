import {
  UserForm,
  Button,
  UserSignUpInput,
  UserRadio,
  UserLabel,
  UserBirthInput,
  CheckBoxList,
} from 'components/user';
import Title from 'components/Title';
import Border from 'components/Border';
import styled from 'styled-components';
import theme from 'style/theme';
import React, { useRef, useState } from 'react';
import { useSignUp, useAuthState } from '@service/auth';
import { useCreateAuthUser } from '@service/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@service/auth';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import Loading from 'components/Loading';

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
  const { isLoading, error } = useAuthState();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);

  const formStateRef = useRef(initialFormState);
  const doubleCheckEmailRef = useRef();
  const doubleCheckNicknameRef = useRef();
  const checkPhoneRef = useRef();

  const navigate = useNavigate();

  const checkList = [
    { name: 'termsOfUse', children: '이용약관 동의 여부 (필수)' },
    { name: 'termsOfPersonalInfo', children: '개인정보 수집 이용 여부 (필수)' },
    { name: 'termsOfAge', children: '19세 이상 확인 (필수)' },
  ];

  const handleEmailDuplicate = async () => {
    const value = doubleCheckEmailRef.current.value;
    const docName = doubleCheckEmailRef.current.name;

    const regExp = /[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-z]/;

    if (value.trim() === '') {
      alert('이메일을 입력해주세요.');
      setCheckEmail(false);
    } else if (!regExp.test(value)) {
      alert('이메일 형식을 확인해주세요.');
      setCheckEmail(false);
    } else {
      const q = query(collection(db, 'users'), where(docName, '==', value));

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        alert('사용 가능한 이메일입니다.');
        setCheckEmail(true);
      } else {
        alert('이미 사용 중인 이메일입니다.');
        setCheckEmail(false);
      }
    }
  };

  const handleNicknameDuplicate = async () => {
    const value = doubleCheckNicknameRef.current.value;
    const docName = doubleCheckNicknameRef.current.name;

    if (value.trim() === '') {
      alert('닉네임을 입력해주세요.');
      setCheckNickname(false);
    } else {
      const q = query(collection(db, 'users'), where(docName, '==', value));

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        alert('사용 가능한 닉네임입니다.');
        setCheckNickname(true);
      } else {
        alert('이미 사용 중인 닉네임입니다.');
        setCheckNickname(false);
      }
    }
  };

  const handlePhoneValid = () => {
    const value = checkPhoneRef.current.value;
    const regExp = /010+[0-9]{8}/;
    if (value.trim() === '') {
      alert('핸드폰 번호를 입력해주세요.');
      setCheckPhone(false);
    } else {
      if (!regExp.test(value)) {
        alert('핸드폰 번호를 확인해주세요.');
        setCheckPhone(false);
      } else {
        alert('인증번호를 전송했습니다.');
        setCheckPhone(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      passwordConfirm,
      nickname,
      phone,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      termsOfUse,
      termsOfPersonalInfo,
      termsOfAge,
    } = formStateRef.current;

    //유효성 검사
    if (!checkEmail) {
      alert('이메일을 확인해주세요.');
      return;
    }

    if (!name || name.trim().length < 2) {
      alert('이름은 2글자 이상 입력해야 해요.');
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      alert('입력한 패스워드를 다시 확인하세요.');
      return;
    }

    if (password.length < 8) {
      alert('비밀번호는 8자 이상 입력해주세요.');
      return;
    }

    if (!checkNickname) {
      alert('닉네임을 확인해주세요.');
      return;
    }

    if (!checkPhone) {
      alert('핸드폰 번호를 인증해주세요.');
      return;
    }

    if (!birthYear || !birthMonth || !birthDay) {
      alert('생년월일를 입력해주세요.');
      return;
    }

    if (
      termsOfUse === false ||
      termsOfPersonalInfo === false ||
      termsOfAge === false
    ) {
      alert('필수 이용약관 동의를 체크해주세요.');
      return;
    }

    const user = await signUp(email, password, name);
    await createAuthUser(user, {
      name,
      nickname,
      phone,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      termsOfUse,
      termsOfPersonalInfo,
      termsOfAge,
    });

    // console.log("회원가입 및 users 콜렉션에 user 데이터 생성");
    alert('회원가입이 완료되었습니다 :)');
    navigate('/');
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  if (isLoading) {
    return <div role="alert">< Loading /></div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  return (
    <>
      <Header />
      <SmoothScroll>
        <StyledSection onSubmit={handleSubmit}>
          <Title>회원가입</Title>
          <StyledRequire>필수입력사항</StyledRequire>
          <Border />
          <UserSignUpInput
            name={'email'}
            type={'email'}
            button={'중복확인'}
            placeholder={'dif@example.com'}
            onChange={handleChangeInput}
            onClick={handleEmailDuplicate}
            ref={doubleCheckEmailRef}
            visible
            required
          >
            이메일
          </UserSignUpInput>
          <UserSignUpInput
            name={'password'}
            type={'password'}
            placeholder={'비밀번호를 입력해주세요.'}
            onChange={handleChangeInput}
            required
          >
            비밀번호
          </UserSignUpInput>
          <UserSignUpInput
            name={'passwordConfirm'}
            type={'password'}
            placeholder={'비밀번호를 한번 더 입력해주세요.'}
            onChange={handleChangeInput}
            required
          >
            비밀번호 확인
          </UserSignUpInput>
          <UserSignUpInput
            name={'name'}
            placeholder={'이름을 입력해주세요.'}
            onChange={handleChangeInput}
            required
          >
            이름
          </UserSignUpInput>
          <UserSignUpInput
            name={'nickname'}
            button={'중복확인'}
            placeholder={'닉네임을 입력해주세요.'}
            onChange={handleChangeInput}
            onClick={handleNicknameDuplicate}
            ref={doubleCheckNicknameRef}
            visible
            required
          >
            닉네임
          </UserSignUpInput>
          <UserSignUpInput
            name={'phone'}
            maxLength={11}
            button={'인증번호 받기'}
            placeholder={'숫자만 입력해주세요.'}
            onChange={handleChangeInput}
            onClick={handlePhoneValid}
            ref={checkPhoneRef}
            visible
            required
            number
          >
            휴대폰
          </UserSignUpInput>
          <UserLabel>성별</UserLabel>
          <StyledGender>
            <UserRadio name="gender" onChange={handleChangeInput}>
              남자
            </UserRadio>
            <UserRadio name="gender" onChange={handleChangeInput}>
              여자
            </UserRadio>
            <UserRadio name="gender" onChange={handleChangeInput}>
              선택안함
            </UserRadio>
          </StyledGender>
          <UserLabel required>생년월일</UserLabel>
          <StyledBirth>
            <UserBirthInput
              onChange={handleChangeInput}
              name={'birthYear'}
              placeholder={'YYYY'}
              maxLength={4}
            />
            <UserBirthInput
              onChange={handleChangeInput}
              name={'birthMonth'}
              placeholder={'MM'}
              maxLength={2}
            />
            <UserBirthInput
              onChange={handleChangeInput}
              name={'birthDay'}
              placeholder={'YY'}
              maxLength={2}
            />
          </StyledBirth>
          <Border slim />
          <UserLabel required>이용약관동의</UserLabel>
          <CheckBoxList checklist={checkList} onChange={handleChangeInput} />
          <Border slim gray />
          <StyledSubmitButton type="submit" visible>
            가입하기
          </StyledSubmitButton>
        </StyledSection>
        <Footer />
      </SmoothScroll>
    </>
  );
};

const StyledSection = styled(UserForm)`
  width: 40rem;
  margin: 0 auto 6.25rem auto;
  padding-top: 13.938rem;
  display: flex;
  flex-flow: column nowrap;
`;
const StyledGender = styled.div`
  width: 20.8125rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  top: -1.5rem;
  left: 8.75rem;
`;

const StyledBirth = styled.div`
  width: 21.25rem;
  height: 3.125rem;
  margin: ${theme.spacingXs} 0;
  border: 0.0625rem solid #a6a6a6;
  border-radius: 3.125rem;
  background-color: ${theme.white};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 8.75rem;
  top: -2.5rem;
`;

const StyledSubmitButton = styled(Button)`
  margin: 2.5rem auto 0 auto;
`;

const StyledRequire = styled.p`
  position: relative;
  left: 560px;
  padding-bottom: 0.3125rem;
  font-size: ${theme.textSm};
  &::before {
    content: '*';
    font-size: ${theme.textBase};
    color: ${theme.pink};
    position: relative;
    top: -0.125rem;
    left: -0.125rem;
  }
`;
