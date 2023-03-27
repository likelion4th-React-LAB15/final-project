import styled from 'styled-components/macro';
import theme from 'style/theme';
import detailBtn from 'assets/icons/btn-search-bold.svg';

export const OutlineTable = ({ detail, children }) => {
  if (detail) {
    return (
      <StyledOutlineTable className='detail'>
        {children}
      </StyledOutlineTable>
    )
  } else {
    return (
      <StyledOutlineTable>
        {children}
      </StyledOutlineTable>
    )
  }

}

const StyledOutlineTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-top: .125rem solid ${theme.blue};
  tr{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 1.25rem 0;
    border-bottom: 1px solid #c5c5e1;
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
  }
  th{
    width: 15.625rem;
    font-weight: 700;
    color: ${theme.indigo};
    text-align: left;
  }
  td{
    width: calc(100% - 15.625rem);
    font-weight: 500;
    color: ${theme.gray};
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  &.detail th{
    width: 21.25rem;
  }
  &.detail a{
    display: inline-block;
    width: 23px;
    height: 23px;
    background-image: url(${detailBtn});
    background-position: center;
    background-repeat: no-repeat;
  }
`