import styled from 'styled-components';
import React, { useEffect, useId, useState } from 'react';
import theme from 'style/theme';
import Checkbox from 'assets/icons/check.svg';
import Arrow from 'assets/icons/btn-arrow-next.svg';

export const UserCheckBox = ({ children, isChecked, ...rest }) => {
  const UserInputId = useId();

  return (
    <StyledDiv>
      <StyledCheckbox
        type="checkbox"
        id={UserInputId}
        {...rest}
      ></StyledCheckbox>
      <StyledCheckLabel
        className={isChecked}
        htmlFor={UserInputId}
      ></StyledCheckLabel>
      <StyledLabel htmlFor={UserInputId}>{children}</StyledLabel>
    </StyledDiv>
  );
};

export const CheckBoxList = ({ checklist, onChange }) => {
  const [checkList, setCheckList] = useState([]);
  const [IdList, setIdList] = useState([]);

  useEffect(() => {
    let ids = [];
    checklist.map((item, index) => {
      ids[index] = item.name;
    });
    setIdList(ids);
  }, [checklist]);

  const handleAllCheck = (e) => {
    setCheckList(e.target.checked ? IdList : []);
  };

  const handleCompareCheck = (e) => {
    if (e.target.checked) {
      setCheckList([...checkList, e.target.name]);
    } else {
      setCheckList(
        checkList.filter((checkName) => checkName !== e.target.name)
      );
    }
  };

  return (
    <StyledUl>
      <StyledList>
        <UserCheckBox
          onChange={handleAllCheck}
          checked={checkList.length === IdList.length}
          isChecked={checkList.length === IdList.length ? 'checked' : ''}
        >
          전체 동의합니다.
        </UserCheckBox>
        <StyledText>
          선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인 서비스를 이용할
          수 있습니다.
        </StyledText>
      </StyledList>
      {checklist.map((item, index) => {
        return (
          <StyledList key={index}>
            <StyledButton type="button">약관보기</StyledButton>
            <UserCheckBox
              name={item.name}
              onClick={handleCompareCheck}
              onChange={onChange}
              checked={checkList.includes(item.name)}
              isChecked={checkList.includes(item.name) ? 'checked' : ''}
            >
              {item.children}
            </UserCheckBox>
          </StyledList>
        );
      })}
    </StyledUl>
  );
};

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
`;

const StyledCheckbox = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  appearance: none;
  border-radius: 50%;
  margin-bottom: 0.92rem;
`;

const StyledCheckLabel = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-self: center;
  background-image: url(${Checkbox});
  background-position: -0.5rem -0.5rem;
  background-color: ${theme.white};
  white-space: nowrap;
  border: none;
  border-radius: 50%;
  margin-right: 2rem;
  margin-bottom: ${theme.spacingSm};
  position: absolute;
  top: 0.125rem;
  left: 0.1875rem;
  &.checked {
    background-position: -0.5rem -2.5rem;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  align-self: center;
  white-space: nowrap;
  margin-bottom: 0.6875rem;
  position: absolute;
  left: 2rem;
  top: 0.5rem;
`;

const StyledList = styled.li`
  position: relative;
  width: 28.125rem;
`;

const StyledUl = styled.ul`
  position: relative;
  left: 8.75rem;
  top: -1.25rem;
`;

const StyledButton = styled.button`
  width: 3.75rem;
  position: absolute;
  right: 2rem;
  top: 0.5rem;
  background-color: white;
  border: none;
  color: ${theme.blue};
  font-size: ${theme.textSm};
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-size: 0.375rem;
  background-position: right top 40%;
`;

const StyledText = styled.p`
  font-size: ${theme.textSm};
  color: ${theme.gray};
  position: relative;
  top: -0.625rem;
  left: 2.0625rem;
`;
