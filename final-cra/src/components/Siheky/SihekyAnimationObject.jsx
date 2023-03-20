import gsap from 'gsap';
import { useEffect } from "react";
import styled from 'styled-components/macro';
import bigFish from 'assets/images/itr-fish-02.svg';
import smallFish from 'assets/images/itr-fish-03.svg';
import middleFish from 'assets/images/itr-fish-01.svg';


function SihekyAniObj() {
  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline({ defaults: { repeat: -1, yoyo: true, ease: 'power0.easeNone' } })
      tl.to('.smallBubble01', { y: -20, duration: 2 })
        .to('.smallBubble02', { y: 20, duration: 2 }, '<')
        .to('.smallBubble03', { y: -20, duration: 2.3 }, '<')
        .to('.middleBubble01', { y: -10, duration: 2 }, '<')
        .to('.smallFish01', { y: -20, duration: 2.5 }, '<')
        .to('.middleFish01', { y: 20, duration: 3 }, '<')
        .to('.bigFish01', { y: 30, duration: 4 }, '<');
    }, 100);
  }, []);

  return (
    <>
      <StyledSihekyAniObj>
        <img className="smallBubble01" src={require('assets/images/itr-bubble-small.webp')} alt="작은물방울" />
        <img className="smallBubble02" src={require('assets/images/itr-bubble-small.webp')} alt="작은물방울" />
        <img className="smallBubble03" src={require('assets/images/itr-bubble-small.webp')} alt="작은물방울" />
        <img className="middleBubble01" src={require('assets/images/itr-bubble-middle.webp')} alt="물방울" />
        <img className="bigBubble01" src={require('assets/images/itr-bubble-big.webp')} alt="큰물방울" />
        <img className="smallFish01" src={smallFish} alt="작은물고기" />
        < img className="middleFish01" src={middleFish} alt="물고기" />
        <img className="bigFish01" src={bigFish} alt="큰물고기" />
      </StyledSihekyAniObj>
    </>
  )
}

const StyledSihekyAniObj = styled.div`
  position: absolute;
  top:0;
  left:0;
  img{
    position: absolute;
  }
  .smallBubble01{
    top: 18.75rem; 
    left: 0;
  }
  .smallBubble02{
    top: 17.5rem;
    left: 43.75rem;
  }
  .smallBubble03{
    top: 16.25rem;
    left: 75rem;
  }
  .middleBubble01{
    top: 16.25rem;
    left: -6.25rem;
  }
  .bigBubble01{
    top: 31.25rem;
    left: 36.25rem;
  }
  .smallFish01{
    top: 0;
    left: 20.625rem;
  }
  .middleFish01{
    top: 12.5rem;
    left: 38.75rem;
  }
  .bigFish01{
    top: 23.75rem;
    left: 12.5rem;
  }
`

export default SihekyAniObj