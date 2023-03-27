import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledVideoPopupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 80%;
    height: 60%;
  }

  button[type='button'] {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
`;

export const VideoPopup = ({ linkProps, toggle: [_, setToggleState] }) => {
  useEffect(() => {}, []);

  return (
    <StyledVideoPopupWrapper>
      <video
        autoPlay
        muted
        src={require(`./../../assets/video/${linkProps}.mp4`)}
      ></video>
      <button
        type="button"
        onClick={() => {
          setToggleState(!_);
        }}
      >
        Close
      </button>
    </StyledVideoPopupWrapper>
  );
};
