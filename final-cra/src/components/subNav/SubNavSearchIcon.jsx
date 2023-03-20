import styled from 'styled-components/macro';
import searchIcon from 'assets/icons/btn-search-white.svg';

export const SubNavSearchIcon = ({ children }) => {

  return (
    <StyledSubNavSearchIcon>
      <button type='button'>
        <img src={searchIcon} alt="찾기" />
      </button>
    </StyledSubNavSearchIcon>
  )
}

const StyledSubNavSearchIcon = styled.div`
  button{
    cursor: pointer;
    background-color: transparent;
    width: 1.6875rem;
    height: 1.6875rem;
    padding: 0;
    border: 0;
  }
  img{
    display: block;
    width: 100%;
  }
`