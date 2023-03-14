import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react';

const Titles = styled.ul`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;

  > li {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: center;

    > span {
      display: inline-block;
      font: 600 8.75rem/1 'arial';
      color: #fff;

      &:nth-last-of-type(1),
      &:nth-last-of-type(2),
      &:nth-last-of-type(3) {
        -webkit-text-stroke: 0.125rem #fff;
        color: transparent;
        text-transform: uppercase;
      }
      &:nth-last-of-type(3) {
        margin-left: 1.75rem;
      }
    }
  }

  .subTitleWrap {
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: -20%;
    transform: translateX(-50%);

    > li {
      /* opacity: 0; */
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

const ReservationWrapper = styled.div`
  width: 67.5rem;
  height: 6.25rem;
  background-color: transparent;
  border: 0.0625rem solid #fff;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  border-radius: 3.125rem;

  input[type='date'] {
    border: 0;
    background-color: transparent;
    color: #fff;
    font: 200 1rem/1 'arial';
  }
`;

const slideInBottom = keyframes`
  0% {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  85% {
    -webkit-transform: translateY(170%);
    transform: translateY(170%);
  }
  100% {
    -webkit-transform: translateY(170%);
    transform: translateY(170%);
  }
`;

const Line = styled.div`
  background: rgba(255, 255, 255, 0.3);
  width: 2px;
  height: 80px;
  position: absolute;
  bottom: -140px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  &::before {
    content: '';
    width: 2px;
    height: 35px;
    background: #fff;
    position: absolute;
    animation: ${slideInBottom} 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite;
  }
`;

const MenuBottom = styled.div`
  width: 100%;
  height: 4.625rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 2;

  .inner {
    width: 64.625rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font: 800 1.125rem/1 'arial';

    li {
      width: calc(100% / 4);
      height: 100%;
      text-align: center;
      display: flex;
      flex-flow: column nowrap;
      cursor: pointer;

      span:nth-of-type(1) {
        margin-top: 1.5rem;
        opacity: 1;
      }
      span:nth-of-type(2) {
        display: flex;
        justify-content: flex-start;
        width: 0%;
        height: 4px;
        display: inline-block;
        background-color: #ff0099;
        opacity: 1;
        margin-top: auto;
        transition: all 0.5s;
      }
    }
  }
`;

const titles = [
  { title: 'Exciting PIC', subTitle: '상상, 그 이상의 즐거움이 펼쳐지는 곳' },
  {
    title: 'KidFriendly PIC',
    subTitle: '아이와 가족 모두에게 충만한 행복을 선사합니다',
  },
  {
    title: 'Romantic PIC',
    subTitle:
      '로맨틱하고 아름다운 휴가로 사랑하는 연인과 특별한 추억을 남기세요',
  },
  {
    title: 'Relaxing PIC',
    subTitle:
      '몸도 마음도 풍요로워지는 진정한 휴식과 충만한 재충전의 시간을 경험하세요',
  },
];

const splitTextAni = () => {
  gsap
    .timeline({ duration: 0.8, repeat: -1 })
    .from('.title1 > span, .subTitle1', {
      opacity: 0,
      y: 50,
      stagger: { each: 0.2 },
    })
    .to('.title1 > span, .subTitle1', {
      delay: 4,
      opacity: 0,
      stagger: { each: 0.2 },
    })
    .from('.title2 > span, .subTitle2', {
      opacity: 0,
      y: 50,
      stagger: { each: 0.2 },
    })
    .to('.title2 > span, .subTitle2', {
      delay: 4,
      opacity: 0,
      stagger: { each: 0.2 },
    })
    .from('.title3 > span, .subTitle3', {
      opacity: 0,
      y: 50,
      stagger: { each: 0.2 },
    })
    .to('.title3 > span, .subTitle3', {
      delay: 4,
      opacity: 0,
      stagger: { each: 0.2 },
    })
    .from('.title4 > span, .subTitle4', {
      opacity: 0,
      y: 50,
      stagger: { each: 0.2 },
    })
    .to('.title4 > span, .subTitle4', {
      delay: 4,
      opacity: 0,
      stagger: { each: 0.2 },
    });
};

const progressAni = () => {
  const base = 10;

  gsap
    .timeline({ repeat: -1 })
    .to('.progress1', { width: '100%', duration: base })
    .to('.progress1', { width: '0%', duration: 0.8, delay: 4 })
    .to('.progress2', { width: '100%', duration: base })
    .to('.progress2', { width: '0%', duration: 0.8, delay: 4 })
    .to('.progress3', { width: '100%', duration: base })
    .to('.progress3', { width: '0%', duration: 0.8, delay: 4 })
    .to('.progress4', { width: '100%', duration: base })
    .to('.progress4', { width: '0%', duration: 0.8, delay: 4 });
};

const Visual = () => {
  useEffect(() => {
    splitTextAni();
    progressAni();
  }, []);

  const [count, setCount] = useState([2, 0]);
  const [reserVation, setReserVation] = useState('GUAM');

  const rsvChange = (txt) => (_) => setReserVation(txt);

  return (
    <VisualWapper>
      <Titles>
        {titles.map(({ title, subTitle }, idx) => (
          <li className={`title${idx + 1}`} key={title}>
            {[...title.split(' ')[0]].map((el) => (
              <span key={el}>{el}</span>
            ))}
            <span>P</span>
            <span>I</span>
            <span>C</span>
            <ul className="subTitleWrap">
              <li className={`subTitle${idx + 1}`}>{subTitle}</li>
            </ul>
          </li>
        ))}
      </Titles>
      <video
        autoPlay
        loop
        muted
        src={require('../../src/assets/images/visual-video.mp4')}
      ></video>

      <ReservationWrapper>
        <ul>
          <li>{reserVation}</li>
          <button onClick={rsvChange('GUAM')}>업</button>
          <button onClick={rsvChange('SAPIAN')}>다운</button>
        </ul>

        <ul>
          <li>CHECK IN / OUT</li>

          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
        </ul>
        <Line />
      </ReservationWrapper>

      <MenuBottom>
        <ul className="inner">
          {titles.map(({ title }, idx) => (
            <li key={title}>
              <span>{title}</span>
              <span className={`progress${idx + 1}`}></span>
            </li>
          ))}
        </ul>
      </MenuBottom>
    </VisualWapper>
  );
};

export default Visual;
