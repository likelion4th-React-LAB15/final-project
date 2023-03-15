import { useId } from 'react';
import theme from 'style/theme';
import styled from 'styled-components';

const InputStyled = styled.input`
  border: 0;
  background: transparent;
  color: ${theme.white};
  font: 200 1rem/1 'arial';
  outline: none;

  &::placeholder {
    color: ${theme.white};
    opacity: 0.5;
    font-size: 1.2rem;
  }
`;

export const CustomInput = ({
  type = 'date',
  placeholer = 'Inser Code',
  className,
  children,
  style,
  ...restProps
}) => {
  const inputId = useId();

  return (
    <>
      <label className={className} htmlFor={inputId}>
        {children}
      </label>
      <InputStyled
        style={style}
        classNames={className}
        type={type}
        placeholder={placeholer}
        id={inputId}
        {...restProps}
      />
    </>
  );
};
