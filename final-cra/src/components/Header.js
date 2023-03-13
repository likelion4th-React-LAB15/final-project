import styled from 'styled-components';
import headerAni from './headerAni.css';
// import hteme from './../../public/style/theme.css';
import HeaderWave from './HeaderWave.js';
import React, { useState, useEffect, useRef } from 'react'


const HeaderWapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--pink);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;

  .menuBtn{
    width: 35px;
    height: 16px;

    ul{
      position: relative;
      width: 100%;
      height: 100%;
      cursor:pointer;

      li{
        position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          height: 2px;
          background-color: #fff;
          border-radius: 1px;

        &:nth-of-type(1){
          top:0;
          animation: design .75s forwards;
        }

        &:nth-of-type(2){
          top: 7px;
          transition: all .25s .25s;
          opacity: 1;
        }

        &:nth-of-type(3){
          bottom: 0;
          animation: design2 .75s forwards;
        }

      }
    }

    ul.active{
      li{
        &:nth-of-type(1){
          top:-12px;
          animation: active-design .75s forwards;
        }
        &:nth-of-type(2){
              opacity: 0;
          animation: active-design .75s forwards;
        }
        &:nth-of-type(3){
              bottom: -12px;
              animation: active-design2 .75s forwards;
        }

      }
    }
  }
`


const Header = () => {

  const [menu, menuSetState] = useState(false);

  return (

    <>
    <HeaderWave menu={menu}/>
    <HeaderWapper>

      <div className="menuBtn" onClick={()=>menuSetState(!menu)}>
        <ul className={!menu? 'active':''}>
          {Array(3).fill().map((el,idx)=><li key={idx}>{el}</li>)}
        </ul>
      </div>

    </HeaderWapper>
    </>
  )
}

export default Header;