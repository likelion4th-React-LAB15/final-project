import React from 'react';
import theme from 'style/theme';
import { keyframes } from 'styled-components/macro';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const moveForever = keyframes`
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
`;

const HeaderWapper = styled.div`
  position: fixed;
  left: 0;
  top: -140%;
  width: 100%;
  background-color: ${theme.blue};
  color: ${theme.white};
  transition: all 0.8s;
  z-index: 100;

  .inner-header {
    width: 100%;
    height: 60vh;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .waves {
    position: absolute;
    left: 0;
    bottom: -22%;
    width: 100%;
    height: 15vh;
    margin-bottom: -0.4375rem; /*Fix for safari gap*/
    min-height: 6.25rem;
    max-height: 9.375rem;
    transform: rotate(180deg);
  }

  .content {
    position: relative;
    height: 20vh;
    text-align: center;
    background-color: ${theme.white};
  }
  .parallax > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  &.active {
    top: 0%;
  }
`;

const MenuWrap = styled.ul`
  width: 67.5rem;
  display: flex;
  justify-content: space-between;

  li {
    font: 500 1.5rem/1 'airal';
    cursor: pointer;

    ul {
      margin: 0.625rem 0 0 0;

      > li {
        font: 400 1rem/1 'airal';
        padding: 0.375rem 0;
        cursor: pointer;
        color: #d0d0d08b;
        transition: color 0.2s;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .link {
    color: #fff;
  }
`;

const menuList = [
  {
    title: 'RESERVATION',
    link: 'reservation',
    subTitle: ['예약하기', '자주하는 질문', '일반문의', '확정예약문의'],
  },
  {
    title: 'PIC',
    link: '',
    subTitle: [
      'PIC소개',
      'PIC카드',
      '클럽메이트',
      '마스코트 시헤키',
      'Why choose PIC?',
      'PIC Cares',
    ],
  },
  {
    title: 'GUAM',
    link: 'guam',
    subTitle: [
      'PIC괌',
      '객실',
      '레스토랑&바',
      '워터파크&액티비티',
      '슈퍼 아메리칸 서커스',
      '키즈프로그램',
      '부대시설',
      '제휴골프장',
      '일반서비스',
      '공식 홈페이지 예약 특전',
      '예약하기',
    ],
  },
  {
    title: 'SAIPAN',
    link: '/saipan',
    subTitle: [
      'PIC사이판',
      '객실',
      '레스토랑&바',
      '워터파크&액티비티',
      '키즈프로그램',
      '부대시설',
      '일반서비스',
      '예약하기',
    ],
  },
  {
    title: 'NOTICE',
    link: '/notice',
    subTitle: ['PIC 괌', '자주하는 PIC 사이판'],
  },
  {
    title: 'COMMUNITY',
    link: '/community',
    subTitle: ['PIC영상'],
  },
];

const HeaderWave = ({ menu }) => {
  return (
    <HeaderWapper className={!menu ? 'header' : 'header active'}>
      <div className="inner-header flex">
        <MenuWrap>
          {menuList.map(({ title, link, subTitle }) => (
            <li key={title}>
              <Link className="link" to={link}>
                {title}
              </Link>

              <ul>
                {subTitle.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </li>
          ))}
        </MenuWrap>
      </div>

      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(33,44,147,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(33,44,147,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(33,44,147,1)" />
        </g>
      </svg>
    </HeaderWapper>
  );
};

export default HeaderWave;
