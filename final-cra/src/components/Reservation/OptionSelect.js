import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from 'style/theme';

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 17.25rem;
  height: 4.625rem;
  border: 1px solid #A6A6A6;
  border-radius: 3.125rem;
  justify-content: space-between;
  padding:0px ${theme.spacingMd};
`;

const Label = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: ${theme.textMd};
  color: #000000;
`;

const Select = styled.select`
  width: 4.5rem;
  height: 2rem;
  font-size: 1.125rem;
  color: #000000;
  border: none;
`;

const OptionSelect = () => {
  const [adults, setAdults] = useState(parseInt(localStorage.getItem('adults')) || 0);
  const [children, setChildren] = useState(parseInt(localStorage.getItem('children')) || 0);
  const [infants, setInfants] = useState(parseInt(localStorage.getItem('infants')) || 0);

  useEffect(() => {
    localStorage.setItem('adults', adults);
    localStorage.setItem('children', children);
    localStorage.setItem('infants', infants);
  }, [adults, children, infants]);

  const handleAdultsChange = (event) => {
    setAdults(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildren(parseInt(event.target.value));
  };

  const handleInfantsChange = (event) => {
    setInfants(parseInt(event.target.value));
  };

  const GuestTypeArray = ["성인", "아동(만 2~11세)", "유아(만 2세 미만)"]; 

  return (
    <>
      {GuestTypeArray.map((option, index) => (
        <OptionContainer key={index}>
          <Label>{option}</Label>
          <Select
            value={option === "성인" ? adults : option === "아동(만 2~11세)" ? children : infants}
            onChange={option === "성인" ? handleAdultsChange : option === "아동(만 2~11세)" ? handleChildrenChange : handleInfantsChange}
          >
            {[...Array(4)].map((_, index) => (
              <option key={index} value={index}>{index}</option>
            ))}
          </Select>
        </OptionContainer>
      ))}
    </>
  );
};

export default OptionSelect;
