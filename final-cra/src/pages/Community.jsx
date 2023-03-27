import React, { useRef, useEffect, forwardRef, useState } from 'react';
import Title from './../components/Title';
import { VideoList, VideoPopup, VideoSlide } from './../components/Community';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import Header from './../components/Header/Header';
import Footer from 'components/Footer/Footer';
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
  const link = useRef('');
  const [toggleState, setToggleState] = useState(false);
  const swiperRef = useRef(null);
  const StyledVideoWrapRef = useRef(null);

  useEffect(() => {
    swiperRef.current?.addEventListener('click', ({ target }) => {
      if (target.dataset.community) {
        link.current = target.getAttribute('src').split('/')[3].split('.')[0];
        setToggleState(true);
      }
    });
    StyledVideoWrapRef.current?.addEventListener('click', ({ target }) => {
      if (target.dataset.community) {
        link.current = target.getAttribute('src').split('/')[3].split('.')[0];
        setToggleState(true);
      }
    });
  }, []);

  return (
    <>
      {toggleState && (
        <VideoPopup
          linkProps={link.current}
          toggle={[toggleState, setToggleState]}
        />
      )}
      <TopBtn />
      <Header />
      <SubNav subNavData={subNavData} />
      <SmoothScroll>
        <Title style={{ marginTop: '14.375rem' }}>PIC영상</Title>
        <VideoSlide ref={swiperRef} />
        <VideoList ref={StyledVideoWrapRef} />
        <Footer />
      </SmoothScroll>
    </>
  );
};
