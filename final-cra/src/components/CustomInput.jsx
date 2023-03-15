import { useId } from 'react';
import theme from 'style/theme';
import styled from 'styled-components';

const InputStyled = styled.input`
  border: 0;
  background: transparent;
  color: ${theme.white};
  font: 200 1rem/1 'arial';
`;

export const CustomInput = ({ type = 'date', placeholer, className, children, style ,...restProps}) => {

  const inputId = useId();

  return (
    <>
      <label className={className} htmlFor={inputId}>{children}</label>
      <InputStyled style={style} classNames={className} type={type} placeholer={placeholer} id={inputId}{...restProps} />
    </>
  );
};
