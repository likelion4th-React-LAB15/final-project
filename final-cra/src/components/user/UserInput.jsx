import React, { useId, useState, forwardRef } from 'react';
import styled from 'styled-components/macro';
import theme from 'style/theme';
import { Button } from 'components/user';

export const UserLogInInput = ({
  type = 'text',
  children,
  labelClass,
  inputClass,
  placeholder,
  ...rest
}) => {
  const UserInputId = useId();
  return (
    <>
      <StyledLogInInput
        className={inputClass}
        type={type}
        id={UserInputId}
        placeholder={placeholder}
        {...rest}
      ></StyledLogInInput>
      <StyledLabel className={labelClass} htmlFor={UserInputId}>
        {children}
      </StyledLabel>
    </>
  );
};

export const UserSignUpInput = forwardRef((props, ref) => {
  const UserInputId = useId();
  const [isNumber, setIsNumber] = useState('');

  const handleNumber = (e) => {
    if (props.number) {
      const result = e.target.value.replace(/\D/g, '');

      setIsNumber(result);
    }
  };

  return (
    <StyledSection>
      <StyledLabel
        className={props.labelClass}
        htmlFor={props.UserInputId}
        required={props.required}
      >
        {props.children}
      </StyledLabel>
      {props.number ? (
        <StyledSignUpInput
          ref={ref}
          name={props.name}
          className={props.inputClass}
          type={props.type}
          id={UserInputId}
          placeholder={props.placeholder}
          value={isNumber}
          onInput={handleNumber}
          maxLength={props.maxLength}
          onChange={props.onChange}
        ></StyledSignUpInput>
      ) : (
        <StyledSignUpInput
          ref={ref}
          name={props.name}
          className={props.inputClass}
          type={props.type}
          id={UserInputId}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        ></StyledSignUpInput>
      )}
      <Button
        visible={props.visible}
        onClick={props.onClick}
        type={props.buttontype}
        secondary
      >
        {props.button}
      </Button>
    </StyledSection>
  );
});

const StyledLogInInput = styled.input`
  width: 21.25rem;
  height: 3.125rem;
  margin: ${theme.spacingXs} 0;
  border: 0.0625rem solid #a6a6a6;
  border-radius: 3.125rem;
  text-indent: ${theme.spacingBase};
`;

const StyledLabel = styled.label`
  display: flex;
  align-self: center;
  white-space: nowrap;
  width: 8.75rem;
  &::after {
    content: '${({ required }) => (required ? '*' : '')}';
    color: ${theme.pink};
    position: relative;
    top: -0.25rem;
    right: -0.125rem;
  }
`;

const StyledSignUpInput = styled.input`
  width: 20.8125rem;
  height: 2.75rem;
  margin: ${theme.spacingMd} ${theme.spacingXs} ${theme.spacingMd} 0;
  border: 0.0625rem solid #a6a6a6;
  border-radius: 3.125rem;
  text-indent: ${theme.spacingBase};
`;

const StyledSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
`;
