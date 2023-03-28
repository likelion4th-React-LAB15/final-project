import React, { useState } from 'react';
import Title from './../components/Title';
import { Btn, Slide, BulletinBoard } from './../components/Notice';
import styled from 'styled-components/macro';
import Footer from './../components/Footer/Footer';
import Header from './../components/Header/Header';
import { SubNav } from 'components/subNav/SubNav';
import Topbtn from 'components/TopBtn';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

const subNavData = [
  {
    id: 1,
    title: 'NOTICE',
    subListTitle: [
      { name: 'RESERVATION', link: '/reservation' },
      { name: 'DIF', link: '/about' },
      { name: 'GUAM', link: '/guam' },
      { name: 'SAIPAN', link: '/saipan' },
      { name: 'NOTICE', link: '/notice' },
      { name: 'COMMUNITY', link: '/community' },
    ],
  },
  {
    id: 2,
    title: 'DIF 괌',
    subListTitle: [
      { name: 'DIF 괌', link: '/' },
      { name: 'DIF 사이판', link: '/' },
    ],
  },
];

export const Notice = () => {
  const [typeState, typeSetState] = useState(true);

  return (
    <>
      <Topbtn />
      <Header />
      <SubNav subNavData={subNavData} />
      <SmoothScroll>
        <Title style={{ marginTop: '14.375rem' }}>PIC괌</Title>
        <BtnWrap>
          <Btn
            typeState={typeState}
            onClick={() => {
              typeSetState(true);
            }}
          >
            공지사항
          </Btn>
          <Btn typeState={!typeState} onClick={() => typeSetState(false)}>
            이벤트
          </Btn>
        </BtnWrap>
        <Slide typeState={typeState} />
        <BulletinBoard typeState={typeState} />
        <Footer />
      </SmoothScroll>
    </>
  );
};
