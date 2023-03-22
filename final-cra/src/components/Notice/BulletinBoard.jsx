import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';

const StyledBulletinBoardWrap = styled.ul`
  width: 100%;
  max-width: 67.5rem;
  margin: 0 auto;
  padding-top: 6.25rem;
  margin-bottom: 6.25rem;

  > li {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 5rem;
    border-bottom: 1px solid #999;
    padding: 0 1.25rem;
    transition: all 0.4s;

    &:nth-of-type(1) {
      border-top: 2px solid #999;
    }

    > span:nth-of-type(1) {
      width: 4%;
      transition: all 0.4s;
    }

    > h4 {
      margin-right: auto;
      font-size: 20px;
      line-height: 30px;
      color: #000551;
      font-weight: 600;
      transition: all 0.6s;
    }

    > span:nth-of-type(2) {
      transition: all 0.4s;
    }

    &:hover {
      background-color: #ff009913;

      > span {
        color: #ff0099;
      }

      > h4 {
        color: #ff0099;
      }
      > span:nth-of-type(2) {
        color: #ff0099;
      }
    }
  }
`;

const noticeData = [
  {
    num: 1,
    title: '[PIC 괌] 안전 인증 마크 & WTTC 안전 여행 스탬프 획득',
    date: '2022-08-09',
  },
  {
    num: 2,
    title:
      '[PIC 괌] 로얄클럽 라운지/레스토랑/워터파크 관련 최신 정보 안내(2023.3.16~)',
    date: '2022-11-29',
  },
  {
    num: 3,
    title: '2023 새해맞이 이벤트 2023-01-18',
    date: '2023-01-18',
  },
  {
    num: 4,
    title: '설 연휴 기간 일반문의 게시판 운영 안내 (1/21~24)',
    date: '2023-01-18',
  },
  {
    num: 5,
    title: '2023/03/01 이후 예약 건 DBB 혜택 변경 공지사항',
    date: '2023-02-15',
  },
  {
    num: 6,
    title: 'PIC 홈페이지 리뉴얼 기념 이벤트 당첨자 발표',
    date: '2023-02-27',
  },
  {
    num: 7,
    title: '2023/3/27(월)~3/31(금) 키즈클럽 유지보수 안내',
    date: '2023-03-16',
  },
];

const eventData = [
  {
    num: 1,
    title: '[PIC 괌] 홈페이지 리뉴얼 이벤트! [종료]',
    date: '2023-01-16 ~ 2023-02-22 종료',
  },
  {
    num: 2,
    title: '[PIC 괌] 홈페이지 리뉴얼',
    date: '2023-02-27 ~ 2023-02-28 종료',
  },
];

export const BulletinBoard = ({ typeState }) => {
  return (
    <StyledBulletinBoardWrap>
      {typeState
        ? noticeData.reverse().map(({ num, title, date }) => {
            return (
              <li>
                <span>{num}</span>
                <h4>{title}</h4>
                <span>{date}</span>
              </li>
            );
          })
        : eventData.reverse().map(({ num, title, date }) => {
            return (
              <li>
                <span>{num}</span>
                <h4>{title}</h4>
                <span>{date}</span>
              </li>
            );
          })}
    </StyledBulletinBoardWrap>
  );
};
