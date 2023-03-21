import React from 'react';
import styled from 'styled-components';
import theme from './../../style/theme';

const StyledBtn = styled.button`
  width: 18rem;
  height: 3.4375rem;
  border: 0;
  cursor: pointer;
  background-color: ${({ type }) =>
    type ? `${theme.blue}` : `${theme.white}`};
  color: ${({ type }) => (type ? `${theme.white}` : `${theme.blue}`)};
  border: 2px solid ${theme.blue};
  border-radius: 2.5rem;
`;

export const Btn = ({ children, type }) => {
  return <StyledBtn type={type}>{children}</StyledBtn>;
};
