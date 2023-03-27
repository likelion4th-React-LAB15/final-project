import styled from 'styled-components/macro';
import { useEffect } from 'react';
import gsap from 'gsap';

import birdIcon from 'assets/images/itr-bird.svg';
import cloudIcon from 'assets/images/itr-cloud.svg';
import sunnyIcon from 'assets/images/itr-sunny.svg';
import waveIcon from 'assets/images/itr-wave.svg';
import treeIcon from 'assets/images/fix-tree.svg';

export const ChooseListBg = ({ reserData }) => {
  gsap.config({ nullTargetWarn: false });
  useEffect(() => {
    setTimeout(() => {
      gsap.to('.sunny01', {
        rotate: '360deg',
        duration: 10,
        repeat: -1,
        ease: 'linear',
      });
      gsap.to('.bird01', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
      });
      gsap.to('.cloud01', {
        y: -40,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
      });
      gsap.to('.cloud02', {
        y: 40,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
      });
      gsap.to('.flowingWaves', {
        x: '-=100vw',
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });
    }, 100);
  }, []);

  return (
    <>
      <StyledChooseListBg>
        <span className="position bird01" aria-hidden="true">
          <img src={birdIcon} alt="새" />
        </span>
        <span className="position sunny01" aria-hidden="true">
          <img src={sunnyIcon} alt="해" />
        </span>
        <span className="position cloud01" aria-hidden="true">
          <img src={cloudIcon} alt="구름" />
        </span>
        <span className="position cloud02" aria-hidden="true">
          <img src={cloudIcon} alt="구름" />
        </span>
        <span className="position tree01" aria-hidden="true">
          <img src={treeIcon} alt="나무" />
        </span>
        <div className="wavesContainer" aria-hidden="true">
          <div className="flowingWaves"></div>
        </div>
      </StyledChooseListBg>
    </>
  );
};

const StyledChooseListBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  .position {
    position: absolute;
  }
  .bird01 {
    top: 28.125rem;
    left: calc(100% / 2 - 28.75rem);
  }
  .sunny01 {
    top: 20.625rem;
    left: calc(100% / 2 - 40rem);
  }
  .cloud01 {
    top: 31.25rem;
    left: calc(100% / 2 - 56.25rem);
  }
  .cloud02 {
    top: 23.75rem;
    left: calc(100% / 2 + 42.5rem);
  }
  .tree01 {
    top: 26.25rem;
    left: calc(100% / 2 + 25rem);
  }
  .wavesContainer {
    width: 100%;
    position: absolute;
    overflow: hidden;
    height: 34.3125rem;
    left: 0;
    top: 43.75rem;
  }
  .flowingWaves {
    width: 300vw;
    height: 100%;
    background-image: url('${waveIcon}');
  }
`;
