import styled from 'styled-components';
import theme from 'style/theme';
import { useState } from 'react';

const AccordionHandleButtonStyle = styled.button`
  align-items: center;
  cursor: pointer;
  justify-content: flex-start;
  display: flex;
  width: 100%;
  text-align: left;
  border: 0;
  padding: 1.5rem 0rem;
  color: ${theme.blue};
  background-color: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  position: relative;
  &:hover {
    background-color: #e5ecff;
  }
`;

const AccordionHandleSvgStyle = styled.svg`
  pointer-events: none;
  user-select: none;
  height: 2rem;
  position: absolute;
  right: 0rem;
`;

const PriceWrapper = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  position: absolute;
  right: 6.25rem;
  color: #444444;
`;

const CheckBox = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  appearance: none;
  border: 0.125rem solid #d5d5d5;
  border-radius: 0.625rem;
  background: url(${(props) =>
      props.isChecked
        ? require('./../../assets/icons/checked.png')
        : require('./../../assets/icons/notChecked.png')})
    no-repeat center center;
  background-color: ${(props) =>
    props.isChecked ? theme.blue : 'transperant'};
  background-size: 1.2675rem 0.9375rem;
  margin-right: 1.2781rem;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  left: -9999px;
  opacity: 0;
`;

const AccordionHandle = ({
  controlId,
  isActive,
  onActive,
  children,
  price,
  onChange,
}) => {
  let iconPath = isActive
    ? 'M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
    : 'M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z';

  const [isChecked, setIsChecked] = useState(false);
  const onCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <AccordionHandleButtonStyle
        id={`${controlId}-handle`}
        aria-expanded={isActive}
        aria-controls={controlId}
        onClick={onActive}
      >
        <CheckBox
          id={`${controlId}-checkbox`}
          tabindex="10"
          onChange={onChange}
          value={price}
          type="checkbox"
          onClick={onCheck}
          isChecked={isChecked}
        ></CheckBox>
        <CheckBoxLabel htmlFor={`${controlId}-checkbox`}>
          체크박스
        </CheckBoxLabel>
        {children}
        <PriceWrapper>${price}</PriceWrapper>

        <AccordionHandleSvgStyle
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path clipRule="evenodd" fillRule="evenodd" d={iconPath} />
        </AccordionHandleSvgStyle>
      </AccordionHandleButtonStyle>
    </div>
  );
};

export default AccordionHandle;
