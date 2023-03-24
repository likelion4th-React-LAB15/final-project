import styled from 'styled-components/macro';
import { ReactComponent as Up } from './../../assets/icons/picker_arrow_next.svg';
import { ReactComponent as Down } from './../../assets/icons/picker_arrow_prev.svg';

export const CustomBtn = ({
  className,
  type = 'button',
  icon,
  ...resetProp
}) => {
  const CustomBtn = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.625rem 0.625rem;
    width: 1.625rem;
    height: 0.6875rem;
    transform: ${(props) =>
      props.icon === 'up' ? 'rotate(180deg)' : 'rotate(-90deg)'};
  `;

  return (
    <CustomBtn className={className} type={type} {...resetProp}>
      {icon === 'up' ? <Up /> : <Down />}
    </CustomBtn>
  );
};
