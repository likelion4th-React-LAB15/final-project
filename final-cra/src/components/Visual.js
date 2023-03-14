import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Titles = styled.ul`
  width: 100%;
  height: 100%;
  position: absolute;

  > li {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: center;

    > span {
      display: inline-block;
      font: 600 8.75rem/1 'arial';
      text-transform: uppercase;
      color: #fff;

      &:nth-last-of-type(1),
      &:nth-last-of-type(2),
      &:nth-last-of-type(3) {
        -webkit-text-stroke: 2px #fff;
        color: transparent;
      }
      &:nth-last-of-type(3) {
        margin-left: 1.75rem;
      }
    }
  }
`;

const VisualWapper = styled.figure`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #222;

  video {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    object-fit: cover;
  }
`;

const titles = [
  'Exciting PIC',
  'Kid Friendly PIC',
  'Romantic PIC',
  'Relaxing PIC',
];

const Visual = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.inOut',
        stagger: { each: 0.2 },
        onComplete() {
          gsap.to(this.targets(), { opacity: 0 });
        },
      },
    });
    tl.from('.title1 > span', {});
    tl.from('.title2 > span', {});
    tl.from('.title3 > span', {});
    tl.from('.title4 > span', {});
  }, []);

  return (
    <VisualWapper>
      <Titles>
        {titles.map((el, idx) => (
          <li className={`title${idx + 1}`} key={el}>
            {[...el.split(' ')[0]].map((el) => (<span key={el}>{el}</span>))}
            <span>P</span>
            <span>I</span>
            <span>C</span>
          </li>
        ))}
      </Titles>

      <video
        autoPlay
        loop
        muted
        src={require('../../src/assets/images/visual-video.mp4')}
      ></video>
    </VisualWapper>
  );
};

export default Visual;
