import React from 'react';
import styled from 'styled-components';
import { useState, forwardRef } from 'react';
import { ReactComponent as MoreBtn } from 'assets/icons/btn-more.svg';

const StyledVideoWrap = styled.ul`
  width: 67.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 80px;

  > li {
    width: 300px;
    height: 280px;
    border-radius: 1.25rem;
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  button[type='button'] {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 12.5rem;

    &:hover {
      transform: rotate(180deg);
    }
  }
`;

let base = 6;

const videoData = [
  {
    id: 11,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-17.mp4',
  },
  {
    id: 12,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-9.mp4',
  },
  {
    id: 13,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-10.mp4',
  },
  {
    id: 14,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-11.mp4',
  },
  {
    id: 15,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-12.mp4',
  },
  {
    id: 16,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-13.mp4',
  },
  {
    id: 17,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-14.mp4',
  },
  {
    id: 18,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-15.mp4',
  },
  {
    id: 19,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-16.mp4',
  },
];

export const VideoList = forwardRef((_, ref) => {
  const [allow, setAllow] = useState(true);

  return (
    <>
      <StyledVideoWrap ref={ref}>
        {videoData.map(({ id, title, src }, idx) => {
          if (idx >= base && allow) return;
          return (
            <>
              <li key={id}>
                <video
                  style={{ cursor: 'pointer' }}
                  data-community
                  src={require(`assets/video/${src}`)}
                  alt={title}
                />
              </li>
            </>
          );
        })}
        <button
          type="button"
          className="moreBtn"
          onClick={() => {
            setAllow(!allow);
          }}
        >
          <MoreBtn />
        </button>
      </StyledVideoWrap>
    </>
  );
});
