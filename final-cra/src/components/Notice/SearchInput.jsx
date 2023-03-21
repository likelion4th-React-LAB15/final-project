import styled from 'styled-components';
import { useId } from 'react';

const inputWrap = styled.div``;

const SearchInput = ({ placeholder = '검색어를 입력해주세요' }) => {
  // const id = usedId();

  return (
    <inputWrap>
      <label htmlFor=""></label>
      <input type="search" name="" id="" />
      {/* <SeachIcon /> */}
    </inputWrap>
  );
};

export default SearchInput;
