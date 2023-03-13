import styled from "styled-components";
import FooterAddress from "components/Footer/FooterAddress";
import FooterGnb from 'components/Footer/FooterGnb';


function FooterWave() {

  return (
    <>
      <StyledFooterWave>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(33,44,147,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(33,44,147,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(33,44,147,1)" />
          </g>
        </svg>
      </StyledFooterWave>
    </>
  )
}

const StyledFooterWave = styled.div`
  .waves {
    position:relative;
    width: 100%;
    height:15vh;
    margin-bottom:-7px; /*Fix for safari gap*/
    min-height:100px;
    max-height:150px;
  }

  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
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
  @keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% { 
      transform: translate3d(85px,0,0);
    }
  }
`



export default FooterWave