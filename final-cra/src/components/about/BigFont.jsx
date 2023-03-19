import styled from 'styled-components/macro';
import theme from 'style/theme';
import { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const BigFont = ({ children, idx, color = 'pink', ...rest }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      gsap.to('.move01', {
        x: -400,
        scrollTrigger: {
          trigger: ".move01",
          start: "-200% center",
          end: "1200 center",
          scrub: true,
        }
      });
      gsap.to('.move02', {
        x: 400,
        scrollTrigger: {
          trigger: ".move02",
          start: "-1034 center",
          end: "1200 center",
          scrub: true,
        }
      });
      gsap.to('.move03', {
        x: -400,
        scrollTrigger: {
          trigger: ".move03",
          start: "-1034 center",
          end: "1200 center",
          scrub: true,
        }
      });
    }, 100);
  }, []);

  return (
    <StyledBigFont className={`${(idx % 2 === 0) ? 'left' : 'right'} ${color} move0${idx + 1}`}>
      {children}
    </StyledBigFont>
  )
}

const StyledBigFont = styled.div`
  position: absolute;
  bottom:-15.625rem;
  font-family: 'Poppins', sans-serif;
  font-size: 18.75rem;
  font-weight: 700;
  color: ${theme.blue};

  &.left{
    left:50%;
  }
  &.right{
    right:50%;
  }
  &.pink{
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.pink};
  }
  &.orange{
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.orange};
  }
  &.blue{
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.blue};
  }
`