import React, { useState, useEffect } from 'react';
import Title from './../components/Title';
import { Btn, Slide, BulletinBoard, SearchInput } from './../components/Notice';
import styled from 'styled-components/macro';
import Footer from './../components/Footer/Footer';
import Header from './../components/Header/Header';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

export const Notice = () => {
  const [typeState, typeSetState] = useState(true);

  useEffect(() => {
    console.log(typeState);
  }, [typeState]);

  return (
    <>
      <SmoothScroll>
        <Header type={'active'} />
        <Title>PIC괌</Title>
        <BtnWrap>
          <Btn typeState={typeState} onClick={() => typeSetState(true)}>
            공지사항
          </Btn>
          <Btn typeState={!typeState} onClick={() => typeSetState(false)}>
            이벤트
          </Btn>
        </BtnWrap>
        <SearchInput />
        <Slide typeState={typeState} />
        <BulletinBoard typeState={typeState} />
        <Footer />
      </SmoothScroll>
    </>
  );
};
