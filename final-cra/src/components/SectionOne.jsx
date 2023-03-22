import styled from 'styled-components/macro';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import theme from 'style/theme';
import React, { useEffect } from 'react';
import { ReactComponent as Pattern1 } from './../assets/images/itr-pattern-01.svg';
import { ReactComponent as Cloud } from './../assets/images/fix-cloud.svg';
import { ReactComponent as Pattern2 } from './../assets/images/itr-pattern-02.svg';

const SectionOneStyled = styled.section`
  width: 100%;
  max-width: 1920px;
  overflow: hidden;
  height: 200rem;
  margin: 0 auto;

  section {
    position: relative;
    display: flex;
    justify-content: center;

    &:nth-of-type(1) {
      padding-top: 20rem;
      margin-bottom: 28.75rem;
    }
    &:nth-of-type(2) {
      margin: 100px 0 520px;
    }
    &:nth-of-type(3) {
      margin-bottom: 12.5rem;
    }

    .textWrap1 {
      position: absolute;
      right: 370px;
      top: 420px;

      h3 {
        display: block;
        font-size: 5.625rem;
        font-weight: 700;
        color: transparent;
        z-index: 1;
        font-family: 'Poppins', Sans-serif;
        -webkit-text-stroke: 2px ${theme.blue};
        margin-bottom: 2.5rem;

        > span {
          color: ${theme.blue};
        }

        &:nth-of-type(1) {
          display: flex;
          flex-flow: column nowrap;
        }
      }

      p {
        margin-bottom: 2.5rem;
      }

      button[type='button'] {
        border: 0;
        background-color: transparent;
        padding: 10px 20px;
        color: ${theme.blue};
        border-radius: 20px;
        border: 2px solid ${theme.blue};
      }

      h4 {
        position: absolute;
        font-size: 90px;
        font-weight: 700;
        color: transparent;
        font-family: Poppins, sans-serif;
        -webkit-text-stroke: 2px ${theme.blue};
        left: -650px;
        top: 160px;
        z-index: 1;
      }
    }

    .textWrap2 {
      position: absolute;
      left: 37.5rem;
      top: 6.75rem;
      z-index: 3;

      h3 {
        margin-left: -7.75rem;
        font-size: 90px;
        color: #212c92;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        line-height: 1;
        letter-spacing: -2px;
        margin-bottom: 1.25rem;
      }

      p {
        width: 14.375rem;
        line-height: 1.6;
        margin-bottom: 3.125rem;
      }

      button[type='button'] {
        border: 0;
        background-color: transparent;
        padding: 10px 20px;
        color: ${theme.blue};
        border-radius: 20px;
        border: 2px solid ${theme.blue};
      }

      h4 {
        position: absolute;
        right: -470px;
        top: 190px;
        font-size: 90px;
        font-weight: 700;
        color: transparent;
        z-index: 1;
        font-family: Poppins, sans-serif;
        -webkit-text-stroke: 2px rgb(33, 44, 146);
      }
    }

    .textWrap3 {
      position: absolute;
      right: 370px;
      top: 54px;

      h3 {
        display: block;
        font-size: 5.625rem;
        font-weight: 700;
        color: ${theme.blue};
        z-index: 1;
        font-family: 'Poppins', Sans-serif;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #212c92;
        margin-bottom: 2.5rem;
        position: relative;
        z-index: 3;

        > span {
          color: ${theme.blue};
        }

        &:nth-of-type(1) {
          display: flex;
          flex-flow: column nowrap;
        }
      }

      p {
        width: 16.25rem;
        line-height: 1.6;
        margin-left: 100px;
        margin-bottom: 2.5rem;
      }

      button[type='button'] {
        border: 0;
        margin-left: 100px;
        background-color: transparent;
        padding: 10px 20px;
        color: ${theme.blue};
        border-radius: 20px;
        border: 2px solid ${theme.blue};
      }

      h4 {
        position: absolute;
        font-size: 90px;
        font-weight: 700;
        color: transparent;
        font-family: Poppins, sans-serif;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${theme.blue};
        left: -650px;
        top: 160px;
        z-index: 1;
      }
    }

    .pic {
      width: 25rem;
      height: 31.25rem;
      overflow: hidden;
      border-radius: 3.125rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .pic0 {
      margin-right: 6.25rem;
    }

    .pic1 {
      margin-left: 18.75rem;
    }
    .pic2 {
      margin-left: -8.25rem;
    }

    .bigTitle1 {
      position: absolute;
      bottom: -40%;
      left: 80vw;
      font-size: 300px;
      line-height: 1;
      font-weight: 700;
      color: transparent;
      font-family: 'Poppins', Sans-serif;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ff0099;
      white-space: nowrap;
    }

    .bigTitle2 {
      position: absolute;
      bottom: -68%;
      right: 80vw;
      font-size: 300px;
      line-height: 1;
      font-weight: 700;
      color: transparent;
      font-family: 'Poppins', Sans-serif;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ff6b24;
      white-space: nowrap;
    }
    .bigTitle3 {
      position: absolute;
      bottom: -68%;
      right: 0;
      font-size: 300px;
      line-height: 1;
      font-weight: 700;
      color: transparent;
      font-family: 'Poppins', Sans-serif;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ff6b24;
      white-space: nowrap;
    }
  }
`;

const data = [
  {
    title: 'CHOOSE PIC',
    text: '즐거움이 계속되는 곳',
    decoTitle: 'WHY?',
    bigTitle: 'DOBBY IS FREE',
  },
  {
    title: 'WATERPARK',
    text: '워터파크와 신나는 액티비티를 모두 무료로 즐겨보세요!',
    decoTitle: 'ACTIVITIES',
    bigTitle: 'IS LANDS',
  },
  {
    title: 'CLUBMATE',
    text: '액티비티 강습부터 키즈클럽 지도자까지 클럽메이트와 함께 PIC 200% 정복!',
    decoTitle: 'KIDS CLUB',
    bigTitle: 'CLUB',
  },
];

const SectionOne = () => {
  useEffect(() => {
    gsap.config({ nullTargetWarn: false });

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      gsap.to('.pic0', {
        y: -200,
        scrollTrigger: {
          trigger: '.trigger0',
          start: 'top top',
          end: 'bottom end',
          ease: 'Power3.easeOut',
          opacity: 1,
          scrub: true,
        },
      });

      gsap.to('.pic1', {
        y: -200,
        scrollTrigger: {
          trigger: '.trigger1',
          start: '-500 top',
          end: 'bottom end',
          ease: 'Power3.easeOut',
          opacity: 1,
          scrub: true,
        },
      });

      gsap.to('.pic2', {
        y: -200,
        scrollTrigger: {
          trigger: '.trigger2',
          start: '-500 top',
          end: 'bottom end',
          ease: 'Power3.easeOut',
          opacity: 1,
          scrub: true,
        },
      });

      gsap.from('.pic0 > img', {
        scale: 1.5,
        scrollTrigger: {
          trigger: '.trigger0',
          start: 'top top',
          end: 'bottom end',
          ease: 'Power3.easeOut',
          opacity: 1,
          scrub: true,
        },
      });

      gsap.from('.pic1 > img', {
        scale: 1.5,
        scrollTrigger: {
          trigger: '.trigger1',
          start: '-500 top',
          end: 'bottom end',
          ease: 'Power3.easeOut',
          opacity: 1,
          scrub: true,
        },
      });

      gsap.from('.pic2 > img', {
        scale: 1.5,
        scrollTrigger: {
          trigger: '.trigger2',
          start: '-500 top',
          end: 'bottom end',
          ease: 'Power3.easeOut',
          opacity: 1,
          scrub: true,
        },
      });

      gsap.to('.bigTitle1', {
        x: -800,
        scrollTrigger: {
          trigger: '.trigger0',
          start: '400 center',
          end: '200% center',
          ease: 'Power3.easeOut',
          scrub: true,
        },
      });

      gsap.to('.bigTitle2', {
        x: 1000,
        scrollTrigger: {
          trigger: '.trigger1',
          start: 'top center',
          end: '200% center',
          ease: 'Power3.easeOut',
          scrub: true,
        },
      });

      gsap.to('.bigTitle3', {
        x: -500,
        scrollTrigger: {
          trigger: '.trigger2',
          start: 'top center',
          end: '200% center',
          ease: 'Power3.easeOut',
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: '.trigger1',
        start: '-600 top',
        // end: 'bottom bottom',
        // markers: true,
        scrub: true,
        // 위에서 아래로 처음 트리거에 접근할때 실행
        onEnter: () => {
          gsap.to(document.body, {
            background: `${theme.blue}`,
          });
          gsap.to('.textWrap2 > h3, .textWrap3 > h3, .textWrap3 > h4', {
            color: `${theme.pink}`,
            webkitTextStrokeColor: `${theme.pink}`,
          });
          gsap.to('.textWrap2 > h4', {
            webkitTextStrokeColor: `${theme.pink}`,
          });
        },
        // 위에서 아래로 처음 트리거에 접근하고 떠나갈때 실행
        onLeave: () => {
          gsap.to(document.body, {
            background: `${theme.white}`,
          });
        },
        // 아래에서 위로(반대방향으로) 접근할때 실행
        onEnterBack: () => {
          gsap.to(document.body, {
            background: `${theme.blue}`,
          });
          gsap.to('.textWrap2 > h3, .textWrap3 > h3', {
            color: `${theme.pink}`,
          });
          gsap.to('.textWrap2 > h4', {
            webkitTextStrokeColor: `${theme.pink}`,
          });
        },
        // 아래에서 위로(반대방향으로) 접근하고 떠나갈때 실행
        onLeaveBack: () => {
          gsap.to(document.body, {
            background: `${theme.white}`,
          });
          gsap.to('.textWrap2 > h3, .textWrap3 > h3', {
            color: `${theme.blue}`,
          });
          gsap.to('.textWrap2 > h4', {
            webkitTextStrokeColor: `${theme.blue}`,
          });
        },
      });
    }, 100);
  }, []);

  return (
    <SectionOneStyled>
      {data.map(({ title, text, decoTitle, bigTitle }, idx) => {
        return (
          <section key={title} className={`trigger${idx}`}>
            {idx === 0 && (
              <>
                <Pattern1
                  style={{ position: 'absolute', left: '14%', top: '134%' }}
                />
              </>
            )}

            <div className={`textWrap${idx + 1}`}>
              <h3>
                {idx === 0 ? (
                  <>
                    {title.split(' ')[0]}{' '}
                    <div>
                      <span>{title.split(' ')[1]}</span>
                    </div>
                  </>
                ) : (
                  title
                )}
              </h3>

              <p>{text}</p>
              <button type="button">VIEW MORE</button>
              <h4>{decoTitle}</h4>
            </div>

            <div className={`pic pic${idx}`}>
              <img
                src={require(`../../src/assets/images/background-0${idx === 2 ? 1 : idx + 2
                  }.webp`)}
                alt={title}
              />
            </div>
            <h2 className={`bigTitle${idx + 1}`}>{bigTitle}</h2>
          </section>
        );
      })}

      <Pattern2
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '8%',
        }}
      />
      <Cloud />
    </SectionOneStyled>
  );
};

export default SectionOne;
