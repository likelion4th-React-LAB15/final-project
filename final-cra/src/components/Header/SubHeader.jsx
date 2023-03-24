import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import theme from 'style/theme';
import styled from 'styled-components/macro';

const subHeaderList = [
  { title: 'RESERVATION', link: '/reservation', key: 0 },
  { title: 'DIF', link: '/about', key: 1 },
  { title: 'GUAM', link: '/guam', key: 2 },
  { title: 'SAIPAN', link: '/saipan', key: 3 },
  { title: 'NOTICE', link: '/notice', key: 4 },
  { title: 'COMMUNITY', link: '/community', key: 5 },
];

const StyledSubHeader = styled.div`
  position: absolute;
  left: 0;
  top: 6.25rem;
  width: 100%;
  height: 3.875rem;
  background: transparent;
  border-top: 0.0625rem solid rgba(255, 255, 255, 0.5);
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.5);
  transition: all 1s;
  transform: translateY(0);
  z-index: 2;
  display: flex;
  justify-content: center;
  transition: transform 1.4s;

  &.up {
    transform: translateY(-200%);
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 69.25rem;

    li {
      font: 600 1rem/1 'arial';
      cursor: pointer;
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -4.375rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.45);
        transform: translateY(-50%);
      }

      &:first-child::after {
        display: none;
      }

      a {
        color: ${theme.white};
      }
    }
  }
`;

const SubHeader = () => {
  const subHeaderRef = useRef(null);

  return (
    <StyledSubHeader ref={subHeaderRef}>
      <ul>
        {subHeaderList.map(({ title, link, key }) => {
          return (
            <li key={key}>
              <Link to={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </StyledSubHeader>
  );
};

export default SubHeader;
