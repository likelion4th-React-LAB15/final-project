import LoadingSpinner from 'assets/icons/loading-spinner.svg';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledLoading>
      <img src={LoadingSpinner} alt="로딩중 이미지" />
      <p>페이지 로딩중입니다.</p>
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;

export default Loading;
