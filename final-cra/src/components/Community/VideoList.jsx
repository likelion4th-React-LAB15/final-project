import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PlayBtn } from './../../assets/icons/ico_video.svg';

const StyledVideoWrap = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  > li {
    width: 100%;
    height: 100%;

    video {
      width: calc(100% / 3);
      height: 100%;
      object-fit: cover;
    }
  }
`;

const videoData = [
  {
    id: 1,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-1.mp4',
  },
  {
    id: 2,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-2.mp4',
  },
  {
    id: 3,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-2.mp4',
  },
  {
    id: 4,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-2.mp4',
  },
  {
    id: 5,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-2.mp4',
  },
  {
    id: 6,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-2.mp4',
  },
];
export const VideoList = () => {
  return (
    <StyledVideoWrap>
      {videoData.map(({ id, title, src }, idx) => {
        return (
          <li key={id}>
            <video src={require(`./../../assets/video/${src}`)} alt={title} />
          </li>
        );
      })}
    </StyledVideoWrap>
  );
};
