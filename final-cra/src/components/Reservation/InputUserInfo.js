import React from 'react';
import styled from 'styled-components';
import theme from 'style/theme';

const Input = styled.input`
  width: 16.5625rem;
  height: 2.5rem;
  background: ${theme.white};
  border: 1px solid #cccccc;
  border-radius: ${theme.spacingMd};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.textSm};
  line-height: 0.9375rem;
  padding-left: ${theme.textMd};
  margin: 0.3125rem 0rem;
`;

const InputUserInfo = ({ value, placeholder }) => {
  return <Input type="text" value={value} placeholder={placeholder} />;
};

export default InputUserInfo;
