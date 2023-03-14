import React,{useEffect, useRef} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Titles = styled.ul`

li{

  span{

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

const Visual = () => {
  return (
    <VisualWapper>
      <Titles>
        {
          
        }
      </Titles>

      <video
        autoPlay
        loop
        muted
        src={require('../../src/assets/images/visual-video.mp4')}
      ></video>
    </VisualWapper>
  );
};

export default Visual;
