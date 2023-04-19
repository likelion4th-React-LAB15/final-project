import styled from 'styled-components/macro';
import Play from 'assets/icons/play.svg';
import Pause from 'assets/icons/pause.svg';

const PlayButton = ({ onClick, isKilled }) => {
  return (
    <StyledToggleButton
      type="button"
      onClick={onClick}
      style={{ backgroundImage: isKilled ? `url(${Play})` : `url(${Pause})` }}
      tabIndex={0}
      aria-label="애니메이션 정지, 재생 버튼"
    />
  );
};

const StyledToggleButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-size: 100%;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 3rem;
  top: 3rem;
  z-index: 100;
`;

export default PlayButton;
