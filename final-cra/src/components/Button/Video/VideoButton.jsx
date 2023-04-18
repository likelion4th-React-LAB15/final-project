import styled from 'styled-components';

export function VideoButton({ onKeyDown, children, ...restProps}) {
  return (
    <Button tabIndex='0' onKeyDown={(e) => onKeyDown(e.key)}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position:absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0;
  opacity: 0;
  :focus-visible {
    opacity: 1;
    background-color: transparent;
    flex-flow: row nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`