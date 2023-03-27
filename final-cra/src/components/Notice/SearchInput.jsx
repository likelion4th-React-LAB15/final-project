import styled from 'styled-components';
import React from 'react';
import { ReactComponent as SeachIcon } from './../../assets/icons/btn-search-bold.svg';

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 28.125rem;
  margin: 0 auto;
  margin-bottom: 2.5rem;

  input[type='search'] {
    border: 0;
    width: 100%;
    max-width: 28.125rem;
    padding: 0;
    font-size: 20px;
    line-height: 42px;
    color: #666;

    &:focus {
      outline: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    display: block;
    width: 100%;
    max-width: 28.125rem;
    height: 2px;
    background-color: #222;
  }

  .seachIcon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SearchInput = ({ placeholder = '검색어를 입력해주세요' }) => {
  return (
    <InputWrap>
      <label htmlFor=""></label>
      <input type="search" placeholder={placeholder} name="" id="" />
      <SeachIcon className="seachIcon" />
    </InputWrap>
  );
};
