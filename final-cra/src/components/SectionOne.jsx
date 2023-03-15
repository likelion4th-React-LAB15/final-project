import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import theme from 'style/theme';
import React, { useState, useEffect, useRef, forwardRef } from 'react';

const SectionOneStyled = styled.section`
  width: 100%;
  height: 5000px;

  section {
    position: relative;
    display: flex;
    justify-content: center;

    &:nth-of-type(1) {
      padding-top: 20rem;
      margin-bottom: 18.75rem;
    }
    &:nth-of-type(2) {
      margin: 100px 0 200px;
    }
    &:nth-of-type(3) {
    }

    .textWrap {
      &:nth-of-type(1) {
        position: absolute;
        right: 370px;
        top: 420px;
      }
      &:nth-of-type(2) {
        position: absolute;
        right: 340px;
        top: 200px;
      }
      &:nth-of-type(3) {
        position: absolute;
        right: 340px;
        top: 200px;
      }

      h3 {
        display: block;
        font-size: 90px;
        font-weight: 700;
        color: transparent;
        z-index: 1;
        font-family: 'Poppins', Sans-serif;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #212c92;
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
    }

    h4 {
      position: absolute;
      font-size: 90px;
      font-weight: 700;
      color: transparent;
      z-index: 1;
      font-family: 'Poppins', Sans-serif;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #212c92;

      &:nth-of-type(1) {
        left: 480px;
        top: 680px;
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
      transition: all 0.62s;
    }

    .bigTitle1 {
      position: absolute;
      bottom: -52%;
      left: 80vw;
      transition: all 0.5s;
      font-size: 300px;
      line-height: 1;
      font-weight: 700;
      color: transparent;
      font-family: 'Poppins', Sans-serif;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ff0099;
    }
  }
`;

const data = [
  {
    title: 'CHOOSE PIC',
    text: '즐거움이 계속되는 곳',
    decoTitle: 'WHY?',
  },
  {
    title: 'WATERPARK',
    text: '워터파크와 신나는 액티비티를 모두 무료로 즐겨보세요!',
    decoTitle: 'ACTIVITIES',
  },
  {
    title: 'CLUBMATE',
    text: '액티비티 강습부터 키즈클럽 지도자까지 클럽메이트와 함께 PIC 200% 정복!',
    decoTitle: 'KIDS CLUB',
  },
];

const SectionOne = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.pic0', {
      y: -50,
      scrollTrigger: {
        trigger: '.trigger0',
        start: '400 center',
        end: 'bottom center',
        ease: 'Power3.easeOut',
        opacity: 1,
        // markers: true,
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
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <SectionOneStyled>
      {data.map(({ title, text, decoTitle }, idx) => {
        return (
          <section key={title} className={`trigger${idx}`}>
            <div className="textWrap">
              <h3>
                {idx === 0 ? (
                  <>
                    {title.split(' ')[0]} <span>{title.split(' ')[1]}</span>
                  </>
                ) : (
                  title
                )}
              </h3>
              <p>{text}</p>
              <button type="button">VIEW MORE</button>
            </div>
            <h4>{decoTitle}</h4>
            <div className={`pic pic${idx}`}>
              <img
                src={require(`../../src/assets/images/background-0${
                  idx + 2
                }.webp`)}
                alt={title}
              />
            </div>
            <h2 className={`bigTitle${idx + 1}`}>DOBBYISFREE</h2>
          </section>
        );
      })}
    </SectionOneStyled>
  );
};

export default SectionOne;
