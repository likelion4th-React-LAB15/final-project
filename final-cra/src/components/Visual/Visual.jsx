import styled, { keyframes } from 'styled-components/macro';
import gsap from 'gsap';
import theme from 'style/theme';
import { CustomInput } from './CustomInput';
import { CustomBtn } from './CustomBtn';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoUrl from 'assets/images/visual-video.mp4';

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
      color: ${theme.white};

      &:nth-last-of-type(1),
      &:nth-last-of-type(2),
      &:nth-last-of-type(3) {
        -webkit-text-stroke: 0.125rem ${theme.white};
        color: transparent;
        text-transform: uppercase;
      }
      &:nth-last-of-type(3) {
        margin-left: 1.75rem;
      }
    }
  }

  .subTitleWrap {
    color: ${theme.white};
    position: absolute;
    left: 50%;
    bottom: -38%;
    transform: translateX(-50%);

    > li {
      /* opacity: 0; */
    }
  }
`;

const VisualWapper = styled.figure`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.black};

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
  border: 0.125rem solid rgba(255, 255, 255, 0.3);
  position: absolute;
  left: 50%;
  top: 62%;
  transform: translate(-50%, -50%);
  border-radius: 3.125rem;
  color: ${theme.white};
  display: flex;
  align-items: center;
  padding: 1.5rem 3.25rem;

  .customBtnWrap {
    display: flex;
    flex-flow: column nowrap;
  }

  .reservationMenu1 {
    height: 100%;

    padding-right: 1.875rem;
  }

  .countBtnWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .reservationMenu2 {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding-right: 1.875rem;
  }

  .reservationMenu3 {
    height: 100%;
    padding-right: 1.875rem;
  }

  .reservationMenu4 {
    height: 100%;
    padding-right: 1.875rem;
  }

  .reservationMenu5 {
    height: 100%;
    padding-right: 1.875rem;
  }

  .reservationMenu6 {
  }

  .searchBtn {
    border: 0.125rem solid ${theme.white};
    border-radius: 1.25rem;
    padding: 10px 40px;
    color: ${theme.white};
    font: 500 1rem/1 'airial';
    background-color: transparent;
    cursor: pointer;
  }

  .promotionWrap {
    input[type='text'] {
      margin-top: 0.625rem;
    }
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
    background: ${theme.white};
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
    color: ${theme.white};
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
        background-color: ${theme.pink};
        opacity: 1;
        margin-top: auto;
        transition: all 0.5s;
      }
    }
  }
`;

const splitTextAni = () => {
  gsap
    .timeline({
      repeat: -1,
      default: {
        duration: 0.8,
      },
    })
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
  const base = 9.3;
  gsap
    .timeline({
      repeat: -1,
      defaults: {
        duration: base,
      },
    })
    .to('.progress1', { width: '100%' })
    .to('.progress1', { width: '0%', duration: 0.4 })
    .to('.progress2', { width: '100%' })
    .to('.progress2', { width: '0%', duration: 0.4 })
    .to('.progress3', { width: '100%' })
    .to('.progress3', { width: '0%', duration: 0.4 })
    .to('.progress4', { width: '100%' })
    .to('.progress4', { width: '0%', duration: 0.4 });
};

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

const reservationList = [
  'RESERVATION',
  'CHECK IN / OUT',
  'ADULT',
  'CHILDREN',
  'PROMOTION',
  'SEARCH',
];

const list = ['GUAM', 'SAIPAN'];

const Visual = () => {
  const value = useRef([list[0], [2, 0]]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    setTimeout(() => {
      splitTextAni();
      progressAni();
    }, 100);
  }, []);

  const reservationChange = (num) => (_) => {
    value.current[0] = list[num];
    setRender(!render);
  };

  const navigate = useNavigate();

  const countChange = (target, type) => () => {
    if (target === 'adult') {
      type === 'up' ? value.current[1][0]++ : value.current[1][0]--;
      if (value.current[1][0] > 3) value.current[1][0] = 3;
      else if (value.current[1][0] < 1) value.current[1][0] = 1;
    }
    if (target === 'children') {
      type === 'up' ? value.current[1][1]++ : value.current[1][1]--;
      if (value.current[1][1] > 3) value.current[1][1] = 3;
      else if (value.current[1][1] < 0) value.current[1][1] = 0;
    }
    setRender(!render);
  };

  return (
    <VisualWapper>
      <Titles>
        {titles.map(({ title, subTitle }, idx) => (
          <li className={`title${idx + 1}`} key={subTitle.toString()}>
            {[...title.split(' ')[0]].map((el, i) => (
              <span key={i}>{el}</span>
            ))}
            <span>D</span>
            <span>I</span>
            <span>F</span>
            <ul className="subTitleWrap">
              <li className={`subTitle${idx + 1}`}>{subTitle}</li>
            </ul>
          </li>
        ))}
      </Titles>

      <video autoPlay loop muted src={videoUrl}></video>

      <ReservationWrapper>
        {reservationList.map((el, idx) => {
          return (
            <ul key={idx} className={`reservationMenu${idx + 1}`}>
              {idx !== reservationList.length - 1 && (
                <>
                  <li>{el}</li>
                </>
              )}

              {el === 'RESERVATION' && (
                <li>
                  <ul className="countBtnWrap">
                    <li>{value.current[0]}</li>
                    <li className="customBtnWrap">
                      <CustomBtn
                        icon="up"
                        onClick={reservationChange(0)}
                        aria-label="증가"
                      />
                      <CustomBtn
                        icon="down"
                        onClick={reservationChange(1)}
                        aria-label="감소"
                      />
                    </li>
                  </ul>
                </li>
              )}

              {el === 'CHECK IN / OUT' && (
                <li>
                  <div className="dateBtnWrap">
                    <CustomInput />
                    <CustomInput />
                  </div>
                </li>
              )}

              {el === 'ADULT' && (
                <li>
                  <ul className="countBtnWrap">
                    <li>{value.current[1][0]}</li>
                    <li className="customBtnWrap">
                      <CustomBtn
                        icon="up"
                        onClick={countChange('adult', 'up')}
                        aria-label="증가"
                      />
                      <CustomBtn
                        icon="down"
                        onClick={countChange('adult', 'down')}
                        aria-label="감소"
                      />
                    </li>
                  </ul>
                </li>
              )}

              {el === 'CHILDREN' && (
                <li>
                  <ul className="countBtnWrap">
                    <li>{value.current[1][1]}</li>
                    <li className="customBtnWrap">
                      <CustomBtn
                        icon="up"
                        onClick={countChange('children', 'up')}
                        aria-label="증가"
                      />
                      <CustomBtn
                        icon="down"
                        onClick={countChange('children', 'down')}
                        aria-label="감소"
                      />
                    </li>
                  </ul>
                </li>
              )}
              {el === 'PROMOTION' && (
                <>
                  <li className="promotionWrap">
                    <CustomInput type="text" />
                  </li>
                </>
              )}

              {el === 'SEARCH' && (
                <li>
                  <button
                    className="searchBtn"
                    onClick={() => {
                      navigate('/reservation3');
                    }}
                  >
                    SEARCH
                  </button>
                </li>
              )}
            </ul>
          );
        })}
        <Line />
      </ReservationWrapper>

      <MenuBottom>
        <ul className="inner">
          {titles.map(({ title }, idx) => (
            <li key={title.toString()}>
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
