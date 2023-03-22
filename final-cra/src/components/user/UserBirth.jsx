import styled from "styled-components"
import { useState, useId, forwardRef } from "react"

export const UserBirthInput = forwardRef((props,ref) => {
  const [ isNumber, setIsNumber] = useState('')
  const UserInputId = useId();

  const handleNumber = (e) =>{
    const result = e.target.value.replace(/\D/g, '');
    setIsNumber(result);
    }

  return (
    <>
      <label className="a11y-hidden" htmlFor={UserInputId}></label>
      <StyledBirthInput name={props.name} placeholder={props.placeholder} maxLength={props.maxLength} id={UserInputId} ref={ref} onInput={handleNumber} value={isNumber} onChange={props.onChange}></StyledBirthInput>
    </>
  )

})

const StyledBirthInput = styled.input`
  width: 4rem;
  height: 2rem;
  text-indent: 0;
  border-radius: 0;
  border: none;
  text-align: center;
`
