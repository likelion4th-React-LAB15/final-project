import React from 'react';
import gsap from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef } from 'react';
import { ReactComponent as TopBtn } from 'assets/icons/btn-top.svg';

const ScrollTopBtn = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    const e = document.querySelector('.scroller');
    const s = Scrollbar.init(e, { speed: 0.7, damping: 0.04 });
    s.addListener((s) => {
      const v = document?.querySelector('figure');
      !v &&
        gsap.to(btnRef.current, {
          opacity: 1,
          scale: 1,
          ease: 'Bounce.easeOut',
        });
      if (v) {
        const h = v.offsetHeight / 2;
        s.offset.y >= h
          ? gsap.to(btnRef.current, {
              opacity: 1,
              scale: 1,
            })
          : gsap.to(btnRef.current, { opacity: 0, scale: 0 });
      }
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
        opacity: 0,
      }}
      ref={btnRef}
    />
  );
};

export default ScrollTopBtn;
