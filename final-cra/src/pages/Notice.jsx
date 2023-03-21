import React from 'react';
import Title from './../components/Title';
import { Btn, Slide, BulletinBoard } from './../components/Notice';
import styled from 'styled-components/macro';
import Footer from './../components/Footer/Footer';

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

export const Notice = () => {
  return (
    <>
      <Title>PIC괌</Title>
      <BtnWrap>
        <Btn type="notice">공지사항</Btn>
        <Btn >이벤트</Btn>
      </BtnWrap>
      <Slide />
      <BulletinBoard />
      <Footer />
    </>
  );
};  
