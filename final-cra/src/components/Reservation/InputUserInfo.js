import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 265px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  padding-left: 22px;
  margin: 5px 0px;
`;

const InputUserInfo = ({ value, placeholder }) => {
  return <Input type="text" value={value} placeholder={placeholder} />;
};

export default InputUserInfo;
