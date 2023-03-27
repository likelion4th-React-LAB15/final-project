import React, { useState } from 'react';
import Title from './../components/Title';
import { Btn, Slide, BulletinBoard, SearchInput } from './../components/Notice';
import styled from 'styled-components/macro';
import Footer from '../components/footer/Footer';
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
    title: 'DIF',
    subListTitle: [
      { name: 'RESERVATION', link: '/' },
      { name: 'DIF', link: '/about' },
      { name: 'GUAM', link: '/' },
      { name: 'SAIPAN', link: '/' },
      { name: 'NOTICE', link: '/' },
      { name: 'COMMUNITY', link: '/' },
    ],
  },
  {
    id: 2,
    title: 'DIF 소개',
    subListTitle: [
      { name: 'DIF소개', link: '/' },
      { name: 'DIF카드', link: '/' },
      { name: '클럽메이트', link: '/' },
      { name: '마스코트 시헤키', link: '/' },
      { name: 'Why Choose DIF?', link: '/' },
      { name: 'DIF Cares', link: '/' },
    ],
  },
];

export const Notice = () => {
  const [typeState, typeSetState] = useState(true);

  return (
    <>
      <Topbtn />
      <SmoothScroll>
        <Header />
        <SubNav subNavData={subNavData} />
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
        <SearchInput />
        <Slide typeState={typeState} />
        <BulletinBoard typeState={typeState} />
        <Footer />
      </SmoothScroll>
    </>
  );
};
