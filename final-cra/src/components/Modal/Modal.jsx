import React from 'react';
import styled from 'styled-components';
import theme from 'style/theme';
import BtnClose from 'assets/icons/btn-close-modal.svg';

const StyledModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.25);
`;
const StyledModal = styled.div`
  margin 0 auto;  
  position: fixed;
  width: 31.25rem;
  height: 17.5rem;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: none;
  border-radius: 2.5rem;
  background-color: ${theme.white};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  h2{
    margin-top: 5.625rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    text-align: center;
  }
`;

const StyledBtn = styled.button`
  position: absolute;
  bottom: 3.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 21.25rem;
  height: 2.5rem;
  border: none;
  border-radius: 2.5rem;
  background-color: ${theme.blue};
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: ${theme.white};
  cursor: pointer;
`;

const StyledCompleteBtn = styled.button`
  position: absolute;
  bottom: 3.75rem;
  left: 70%;
  transform: translateX(-50%);
  width: 11rem;
  height: 2.5rem;
  border: none;
  border-radius: 2.5rem;
  background-color: ${theme.blue};
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: ${theme.white};
  cursor: pointer;
`;

const StyledCloseBtn = styled.button`
  position: absolute;
  bottom: 3.75rem;
  left: 30%;
  transform: translateX(-50%);
  width: 11rem;
  height: 2.5rem;
  border: none;
  border-radius: 2.5rem;
  background-color: #d9d9d9;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: ${theme.black};
  cursor: pointer;
`;

const StyledClose = styled.button`
  width: 2.125rem;
  height: 2.125rem;
  padding: -8px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 20px;
  background-image: url(${BtnClose});
  cursor: pointer;
`;

const Modal = ({ onOpen, onClose, hasChoice, children }) => {
  if (hasChoice) {
    return (
      <StyledModalWrapper>
        <StyledModal>
          <StyledClose onClick={onClose} />
          <h2>{children}</h2>
          <StyledCloseBtn onClick={onClose}>취소</StyledCloseBtn>
          <StyledCompleteBtn onClick={onOpen}>확인</StyledCompleteBtn>
        </StyledModal>
      </StyledModalWrapper>
    );
  } else {
    return (
      <StyledModalWrapper>
        <StyledModal>
          <StyledClose onClick={onClose} />
          <h2>{children}</h2>
          <StyledBtn onClick={onClose}>확인</StyledBtn>
        </StyledModal>
      </StyledModalWrapper>
    );
  }
};

export default Modal;
