import React from 'react';
import Title from './../components/Title';
import { VideoList, VideoPopup, VideoSlide } from './../components/Community';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import Header from './../components/Header/Header';
import Footer from 'components/footer/Footer';
import TopBtn from 'components/TopBtn';
import { SubNav } from '../components/subNav/SubNav';

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

export const Community = () => {
  return (
    <>
      <Header />
      <TopBtn />
      <SmoothScroll>
        <SubNav subNavData={subNavData} />
        <Title style={{ marginTop: '14.375rem' }}>PIC영상</Title>
        <VideoSlide />
        <VideoList />
        <Footer />
      </SmoothScroll>
    </>
  );
};
