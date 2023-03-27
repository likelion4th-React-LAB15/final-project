import styled, { keyframes } from 'styled-components/macro';
import HeaderWave from './HeaderWave';
import theme from 'style/theme';
import { ReactComponent as Cart } from './../../assets/icons/btn-cart.svg';
import { ReactComponent as User } from './../../assets/icons/btn-user.svg';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';

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
const activeHeader = keyframes`
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0%);
  }
`;
const HeaderWapper = styled.header`
  width: 100%;
  height: 6.25rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  position: ${({ type }) => ('active' ? 'absolute' : 'fixed')};
  z-index: 101;
  transition: all 0.4s;

  &.active {
    transform: translateY(-100%);
  }

  &.on {
    animation: ${activeHeader} 1s linear;
    background-color: #fff;

    .menuBtn {
      li {
        background-color: ${theme.blue};
      }
    }

    .infoWrap {
      svg {
        fill: ${theme.blue} !important;
      }
    }
  }

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
      background-color: ${(props) =>
        props.type === 'active' ? `${theme.blue}` : `${theme.white}`};
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

const Header = ({ type, children, style, ...restProps }) => {
  const [menu, menuSetState] = useState(false);
  const headerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      const elem = document.querySelector('.scroller');
      const scrollbar = Scrollbar.init(elem, { speed: 0.7, damping: 0.04 });
      scrollbar.addListener(function (status) {
        if (headerRef.current) {
          status.offset.y >= 100
            ? headerRef.current.classList.add('active')
            : headerRef.current.classList.remove('active');
        }
      });
    }, 10);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      <HeaderWave menu={menu} />

      <HeaderWapper ref={headerRef} {...restProps} type={type}>
        <ul
          className={!menu ? 'menuBtn' : 'menuBtn active'}
          onClick={() => menuSetState(!menu)}
        >
          {Array(3)
            .fill()
            .map((el, idx) => (
              <li
                style={{
                  backgroundColor:
                    type !== 'active' && !menu
                      ? `${theme.blue}`
                      : `${theme.white}`,
                }}
                key={idx}
              >
                {el}
              </li>
            ))}
        </ul>

        <Link to={'/'}>
          <h1 className="logo">
            {type !== 'active' && !menu ? (
              <img
                ref={imgRef}
                src={require('./../../../src/assets/images/logo-off.png')}
                alt="logoOn"
              />
            ) : (
              <img
                ref={imgRef}
                src={require('./../../../src/assets/images/logo-on.png')}
                alt="logoOn"
              />
            )}
          </h1>
        </Link>

        <div className="infoWrap">
          <User
            style={{
              width: 28,
              height: 30,
              fill:
                type !== 'active' && !menu ? `${theme.blue}` : `${theme.white}`,
            }}
          />
          <Cart
            style={{
              width: 28,
              height: 30,
              fill:
                type !== 'active' && !menu ? `${theme.blue}` : `${theme.white}`,
            }}
          />
        </div>
      </HeaderWapper>
    </>
  );
};

export default Header;
