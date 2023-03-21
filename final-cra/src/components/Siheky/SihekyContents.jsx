import gsap from 'gsap';
import theme from "style/theme";
import { useEffect } from "react";
import styled from 'styled-components/macro';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SihkeyBird from 'assets/images/title-illustration.webp';

function SihekyContents() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      gsap.to('.textBox', {
        y: -200,
        scrollTrigger: {
          trigger: ".textBox",
          start: "-700 center",
          end: "700 center",
          scrub: true,
        }
      });
      gsap.to('.moveBird', {
        y: -500,
        scrollTrigger: {
          trigger: ".moveBird",
          start: "-800 center",
          end: "700 center",
          scrub: true,
        }
      });
      gsap.to('.rightTextBox', {
        y: -100,
        scrollTrigger: {
          trigger: ".rightTextBox",
          start: "-700 center",
          end: "700 center",
          scrub: true,
        }
      });

    }, 100);
  }, []);

  return (
    <>
      <StyledSihekyContents>
        <h2>
          <img src={SihkeyBird} alt="Sihkey" className="moveBird" />
          <div className="textBox">
            <strong className="line">DIF</strong>
            <strong className="bold">MASCOT</strong>
          </div>
        </h2>
        <div className="rightTextBox">
          <h3 className="line">SIHEKY</h3>
          <p>시해키는 멸종 위기에 처한 마이크로네시아의 '킹피셔' 라는 천연새 보호 운동에 동참하고자 지정한 마스코트입니다.</p>
          <a className="btnLink" href="/">VIEW MORE</a>
        </div>
      </StyledSihekyContents>
    </>
  )
}

const StyledSihekyContents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 6.25rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  h2{
    width: 50%;
    position: relative;
  }
  .textBox{
    position: absolute;
    top: 9.375rem;
    left: 0;
  }
  .textBox strong{
    display: inline-block;
    width: 100%;
    padding: 0 0 0 2.5rem;
  }
  .line{
    font-size: 5.625rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0);
    font-family: Poppins, sans-serif;
    -webkit-text-stroke: 0.125rem rgb(255, 255, 255);
  }
  .textBox .bold{
    font-size: 5.625rem;
    font-weight: 700;
    color: ${theme.white};
    font-family: 'Poppins',Sans-serif;
  }
  h2 img{
    position: absolute;
    top: 15.625rem;
    left: 17.5rem;
  }
  .rightTextBox{
    width: 31.25rem;
    padding-left: 7.5rem;
    transform: translateY(9.375rem);
  }
  .rightTextBox p{
    font-family: 'Poppins', sans-serif;
    font-size:${theme.textMd};
    font-weight: 700;
    line-height: 1.5;
    color:${theme.white};
    margin-top:${theme.spacingBase};
  }
  .rightTextBox .btnLink{
    display: inline-block;
    width:9.375rem;
    padding:0.75rem 0;
    border: 0.0625rem solid ${theme.white};
    border-radius: 1.875rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size:${theme.textBase};
    font-weight: 700;
    line-height: 1.5;
    color:${theme.white};
    margin-top: 3.125rem;
    transition: all 0.5s;
  } 
  .rightTextBox .btnLink:hover{
    background-color: ${theme.white};
    color: ${theme.blue};
  }
`

export default SihekyContents