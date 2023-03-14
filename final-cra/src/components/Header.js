import styled, { keyframes } from 'styled-components';
import HeaderWave from './HeaderWave.js';
import { pink } from './../style/theme';
import { ReactComponent as Cart } from './../assets/icons/btn-cart.svg';
import { ReactComponent as User } from './../assets/icons/btn-user.svg';
import { useState, useEffect, useRef } from 'react';

const design = keyframes`
	0% {transform:translateY(20px) rotate(45deg);}
	50% {transform:translateY(20px) rotate(0);}
	100% {transform:translateY(0) rotate(0);}
`;
const design2 = keyframes` 
  0% {transform:translateY(-20px) rotate(-45deg);}
	50% {transform:translateY(-20px) rotate(0);}
	100% {transform:translateY(0) rotate(0);}
`;
const activeDesign = keyframes`
	0% {transform:translateY(0) rotate(0);}
	50% {transform:translateY(20px) rotate(0);}
	100% {transform:translateY(20px) rotate(45deg);}
`;
const activeDesign2 = keyframes`
	0% {transform:translateY(0) rotate(0);}
	50% {transform:translateY(-20px) rotate(0);}
	100% {transform:translateY(-20px) rotate(-45deg);}
`;
const HeaderWapper = styled.header`
  width: 100%;
  height: 6.25rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  position: fixed;
  z-index: 3;
  transform: all 0.6s;

  ul.menuBtn {
    width: 2.1875rem;
    height: 1rem;
    position: relative;
    cursor: pointer;

    > li {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      height: 0.125rem;
      background-color: #fff;
      border-radius: 0.0625rem;

      &:nth-of-type(1) {
        top: 0;
        animation: ${design} 0.75s forwards;
      }

      &:nth-of-type(2) {
        top: 0.4375rem;
        transition: all 0.25s 0.25s;
        opacity: 1;
      }

      &:nth-of-type(3) {
        bottom: 0;
        animation: ${design2} 0.75s forwards;
      }
    }
  }

  .menuBtn.active {
    li {
      &:nth-of-type(1) {
        top: -0.75rem;
        animation: ${activeDesign} 0.75s forwards;
      }
      &:nth-of-type(2) {
        opacity: 0;
        animation: ${activeDesign} 0.75s forwards;
      }
      &:nth-of-type(3) {
        bottom: -0.75rem;
        animation: ${activeDesign2} 0.75s forwards;
      }
    }
  }

  h1.logo {
    width: 18.75rem;
    height: 2.25rem;
    cursor: pointer;
    margin-left: 2.625rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .infoWrap {
    display: flex;
    gap: 1.25rem;
  }
`;
const SubHeader = styled.div`
  position: absolute;
  left: 0;
  top: 6.25rem;
  width: 100%;
  height: 3.875rem;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 1s;
  z-index: 2;
  display: flex;
  justify-content: center;

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1108px;

    li {
      font: 600 1rem/1 'arial';
      cursor: pointer;
      color: #fff;
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -70px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.45);
        transform: translateY(-50%);
      }

      &:first-child::after {
        display: none;
      }
    }
  }
`;

const Header = () => {
  const [menu, menuSetState] = useState(false);

  return (
    <>
      <HeaderWave menu={menu} />

      <HeaderWapper>
        <ul
          className={!menu ? 'menuBtn' : 'menuBtn active'}
          onClick={() => menuSetState(!menu)}
        >
          {Array(3)
            .fill()
            .map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
        </ul>

        <h1 className="logo">
          <img
            src={require('../../src/assets/images/logo-on.png')}
            alt="logoOn"
          />
        </h1>

        <div className="infoWrap">
          <User style={{ width: 28, height: 30, fill: '#fff' }} />
          <Cart style={{ width: 28, height: 30, fill: '#fff' }} />
        </div>
      </HeaderWapper>

      <SubHeader>
        <ul>
          <li>RESERVATION</li>
          <li>PIC</li>
          <li>GUAM</li>
          <li>SAIPAN</li>
          <li>NOTICE</li>
          <li>COMMUNITY</li>
        </ul>
      </SubHeader>
    </>
  );
};

export default Header;
