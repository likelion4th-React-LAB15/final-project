import React from 'react';
import styled from 'styled-components';

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

    &:nth-of-type(1) {
      border-top: 2px solid #999;
    }

    > span:nth-of-type(1) {
      width: 10%;
    }

    > h4 {
      margin-right: auto;
    }

    > span:nth-of-type(2) {
    }
  }
`;

const data = [
  {
    num: 1,
    title: '[PIC 괌] 안전 인증 마크 & WTTC 안전 여행 스탬프 획득',
    date: '2022-08-09',
  },
  {
    num: 7,
    title: '2023/3/27(월)~3/31(금) 키즈클럽 유지보수 안내',
    date: '2023-03-16',
  },
  {
    num: 7,
    title: '2023/3/27(월)~3/31(금) 키즈클럽 유지보수 안내',
    date: '2023-03-16',
  },
  {
    num: 7,
    title: '2023/3/27(월)~3/31(금) 키즈클럽 유지보수 안내',
    date: '2023-03-16',
  },
  {
    num: 7,
    title: '2023/3/27(월)~3/31(금) 키즈클럽 유지보수 안내',
    date: '2023-03-16',
  },
  {
    num: 7,
    title: '2023/3/27(월)~3/31(금) 키즈클럽 유지보수 안내',
    date: '2023-03-16',
  },
];

export const BulletinBoard = () => {
  return (
    <StyledBulletinBoardWrap>
      {data.reverse().map(({ num, title, date }, idx) => {
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
