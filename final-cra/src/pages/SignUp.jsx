import { UserForm, UserButton, UserInput } from 'components/user';
import Title from 'components/Title';

export const SignUp = () => {
  return (
    <>
      <UserForm>
        <Title>회원가입</Title>
        <UserInput />
        <UserButton></UserButton>
      </UserForm>
    </>
  )
}