import React, { useState } from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 276px;
  height: 74px;
  border: 1px solid #A6A6A6;
  border-radius: 50px;
  justify-content: space-between;
  padding:0px 20px;
`;

const Label = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const Select = styled.select`
  width: 72px;
  height: 32px;
  font-size: 18px;
  color: #000000;
  border: none;
`;

const OptionSelect = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

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