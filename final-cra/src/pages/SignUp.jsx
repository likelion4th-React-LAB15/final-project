import { UserForm, PrimaryButton, UserSignUpInput, UserRadio, UserCheckBox, UserLabel, UserBirth} from 'components/user';
import Title from 'components/Title';
import Border from 'components/Border';
import styled from 'styled-components';
import theme from 'style/theme';
import Arrow from 'assets/icons/btn-arrow-next.svg'

export const SignUp = () => {
  return (
    <StyledSection>
        <Title>회원가입</Title>
        <StyledRequire>필수입력사항</StyledRequire>
        <Border/>
        <UserSignUpInput button={'중복확인'} placeholder={'dif@example.com'} visible required>이메일</UserSignUpInput>
        <UserSignUpInput placeholder={'비밀번호를 입력해주세요'} required>비밀번호</UserSignUpInput>
        <UserSignUpInput placeholder={'비밀번호를 한번 더 입력해주세요'} required>비밀번호 확인</UserSignUpInput>
        <UserSignUpInput placeholder={'이름을 입력해주세요'} required>이름</UserSignUpInput>
        <UserSignUpInput button={'중복확인'} placeholder={'닉네임을 입력해주세요'} visible required>닉네임</UserSignUpInput>
        <UserSignUpInput button={'인증번호 받기'} placeholder={'숫자만 입력해주세요.'} visible required>휴대폰</UserSignUpInput>
        <UserLabel>성별</UserLabel>
        <StyledGender>
          <UserRadio checked>남자</UserRadio>
          <UserRadio>여자</UserRadio>
          <UserRadio>선택안함</UserRadio>
        </StyledGender>
        <UserLabel>생년월일</UserLabel>
        <UserBirth/>
        <Border slim/>
        <UserLabel>이용약관동의</UserLabel>
        <StyledUl>
          <StyledList>
            <UserCheckBox>전체 동의합니다.</UserCheckBox>
            <StyledText>선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</StyledText>
          </StyledList>
          <StyledList>
            <StyledButton>약관보기</StyledButton><UserCheckBox checked>이용약관 동의 여부 (필수)</UserCheckBox>
          </StyledList>
          <StyledList>
            <StyledButton>약관보기</StyledButton><UserCheckBox>개인정보 수집 이용 여부 (필수)</UserCheckBox>
            </StyledList>
          <StyledList>
            <StyledButton>약관보기</StyledButton>
            <UserCheckBox>19세 이상 확인 (필수)</UserCheckBox>
          </StyledList>          
        </StyledUl>
        <Border slim gray/>
        <StyledPrimaryButton>가입하기</StyledPrimaryButton>
    </StyledSection>
  )
}


const StyledSection = styled(UserForm)`
  width: 40rem;
  margin: 6.25rem auto;
  display: flex;
  flex-flow: column nowrap;
  &(UserLabel):first-child{
    &::after{
      content: ' ';
    }
  }
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
