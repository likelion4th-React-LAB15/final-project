import { useId } from "react";

const UserInput = ({type="text", children, labelClass, inputClass, ...rest}) => {
  const UserInputId = useId();
  return (
    <>
      <label className={labelClass} htmlFor={UserInputId} >{children}</label>
      <input className={inputClass} type={type} id={UserInputId} placeholder="아이디를 입력해주세요" />
    </>
  )
}

export default UserInput;