import styled from 'styled-components/macro';
import theme from 'style/theme';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SubNavSearchIcon } from './SubNavSearchIcon';
import { SubNavLnb } from './SubNavLnb';
import { Link } from 'react-router-dom';
import homeIcon from 'assets/icons/btn-home.svg';
import { SubNavItemList } from './SubNavItemList';

export const SubNav = ({ subNavData, children }) => {

  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.subNavFixed', {
        scrollTrigger: {
          trigger: ".subNavFixed",
          start: "top 100",
          end: "top end",
          onEnter: () => {
            gsap.to('.subNavFixed', {
              position: 'fixed',
              y: '0rem',
              marginTop: 0,
              zIndex: 10,
            })
          },
          onLeaveBack: () => {
            gsap.to('.subNavFixed', {
              position: 'absolute',
              y: '0rem',
              marginTop: '6.25rem',
              zIndex: 10,
            })
          }
        }
      });
    }, 100);
  }, []);

  return (
    <StyledSubNav className='subNavFixed'>
      <StyledSubNavInner>
        <SubNavLnb>
          <li className='subNavTitle'>
            <Link to="/"><img src={homeIcon} alt="홈" /></Link >
          </li>
          {
            subNavData.map((subNavItem, idx) => {
              return (
                <li className='subNavTitle' key={idx}>
                  <Link to="/">{subNavItem.title}</Link >
                  {
                    subNavItem.subListTitle ?
                      <SubNavItemList>
                        {subNavItem.subListTitle.map((item, idx) => {
                          return (
                            <li key={idx}>
                              <Link to={item.link}>{item.name}</Link>
                            </li>
                          )
                        })}
                      </SubNavItemList>
                      : null
                  }
                </li>
              )
            })
          }
        </SubNavLnb>
        <SubNavSearchIcon />
      </StyledSubNavInner>
    </StyledSubNav>
  )
}

const StyledSubNav = styled.div`
  width: 100%;
  height: 3.875rem;
  margin-top:6.25rem;
  position: absolute;
  top:0;
  z-index: 10;
  background-color: ${theme.blue};
  text-align: center;
`

const StyledSubNavInner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 73.75rem;
  height: 100%;
  margin:0 auto;
`