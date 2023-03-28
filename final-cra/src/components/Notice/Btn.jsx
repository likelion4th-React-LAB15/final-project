import React from 'react';
import styled from 'styled-components';
import theme from 'style/theme';

export const Btn = ({ children, typeState, ...resetProps }) => {
  return (
    <StyledBtn typeState={typeState} {...resetProps}>
      {children}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  width: 18rem;
  height: 3.4375rem;
  border: 0;
  cursor: pointer;
  background-color: ${({ typeState }) =>
    typeState ? `${theme.blue}` : `${theme.white}`};
  color: ${({ typeState }) => (typeState ? `${theme.white}` : `${theme.blue}`)};
  border: 2px solid ${theme.blue};
  border-radius: 2.5rem;
  transition: all 0.6s;

  &:hover {
    color: #fff;
    background-color: ${theme.blue};
  }
`;
