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
  padding: 24px 0px;
  color: #212f8c;
  background-color: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  position: relative;
  &:hover {
    background-color: #e5ecff;
  }
`;

const AccordionHandleSvgStyle = styled.svg`
  pointer-events: none;
  user-select: none;
  height: 32px;
  position: absolute;
  right: 0px;
`;

const PriceWrapper = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  margin-left: 400px;
  color: #444444;
`;

const CheckBox = styled.span`
  width: 40px;
  height: 40px;
  border: 0.125rem solid #d5d5d5;
  border-radius: 0.625rem;
  background: url(${(props) =>
      props.checked
        ? require('./../../assets/icons/checked.png')
        : require('./../../assets/icons/notChecked.png')})
    no-repeat center center;
  background-color: ${(props) => (props.checked ? theme.blue : 'transperant')};
  background-size: 20.28px 15px;
  margin-right: 20.45px;
`;

const AccordionHandle = ({
  controlId,
  isActive,
  onActive,
  children,
  price,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
  };
  let iconPath = isActive
    ? 'M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
    : 'M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z';
  return (
    <div>
      <AccordionHandleButtonStyle
        id={`${controlId}-handle`}
        aria-expanded={isActive}
        aria-controls={controlId}
        onClick={onActive}
      >
        <CheckBox
          checked={isChecked}
          onClick={toggleCheckbox}
          tabindex="10"
        ></CheckBox>
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
