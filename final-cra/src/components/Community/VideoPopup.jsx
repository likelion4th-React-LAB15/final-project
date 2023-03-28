import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseBtn } from 'assets/icons/btn-close-black-bold.svg';

export const VideoPopup = ({ linkProps, toggle: [_, setToggleState] }) => {
  return (
    <StyledVideoPopupWrapper>
      <video
        autoPlay
        muted
        src={require(`assets/video/${linkProps}.mp4`)}
      ></video>
      <button
        type="button"
        onClick={() => {
          setToggleState(!_);
        }}
      >
        <CloseBtn />
      </button>
    </StyledVideoPopupWrapper>
  );
};

const StyledVideoPopupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  > video {
    width: 80%;
    height: 60%;
  }

  button[type='button'] {
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 4%;
    transform: translateX(-50%);

    > svg {
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      transform-origin: center center;
      filter: invert(100%);

      &:hover {
        transform: rotate(180deg);
      }
    }
  }
`;
