import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef } from 'react';
import { ReactComponent as TopBtn } from './../assets/icons/btn-top.svg';

const ScrollTopBtn = ({ ...restProps }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const e = document.querySelector('.scroller');
    const s = Scrollbar.init(e, { speed: 0.7, damping: 0.04 });
    s.addListener((s) => {
      // s.offset.y >= document.querySelector('.visual').offsetHieght
    });
    btnRef.current.addEventListener('click', () => {
      s.scrollTo(0, 0, 1200);
    });
  }, []);

  return (
    <TopBtn
      style={{
        position: 'fixed',
        right: '6%',
        bottom: '6%',
        zIndex: 10,
        cursor: 'pointer',
      }}
      ref={btnRef}
    />
  );
};

export default ScrollTopBtn;
