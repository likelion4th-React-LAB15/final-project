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
    title: 'COMMUNITY',
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
    title: 'DIF영상',
    subListTitle: [{ name: 'DIF영상', link: '/community' }],
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
