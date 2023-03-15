import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

const SelectedDays = styled.p`
  margin-top:91px;
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: -0.02em;
  color: #212C92;
`

const StyledCalendar = styled(Calendar)`
  font-size: 16px;
  color: #212C92;
  max-width: 1080px;
  width:100%;
  border: none;
  margin-top:74.31px;
  position: relative;

  & .react-calendar__tile {
    margin:2px;
    max-width:72px;
    height: 91px;
    border: 1px solid #212C92;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #212C92;
  }

  & .react-calendar__tile--now {
    background-color: white;
  }

  & .react-calendar__tile:hover{
    background-color: #E5ECFF;
    color: #212C92;
  }

  & .react-calendar__tile:disabled {
    background-color: rgba(33, 44, 146, 0.7);
    color: #fff;
    border:none;
  }

  & .react-calendar__tile--active {
    color: #fff;
    background: #212C92;
  }

  & .react-calendar__month-view__weekdays {
    abbr {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      font-family: 'Inter';
      font-style: normal;
      color: #212C92;
      text-decoration:none;
    }
  }

  & .react-calendar__navigation__prev-button,
  & .react-calendar__navigation__next-button {
    color: #212C92;
    font-size: 90px;
    position: absolute;
  }

  & .react-calendar__navigation button:disabled {
    background-color: transparent;
  }

  & .react-calendar__navigation__prev-button{
    left: -77.5px;
    top: 270px;
  }

  & .react-calendar__navigation__next-button{
    right: -77.5px;
    top: 270px;
  }

  & .react-calendar__navigation__prev2-button,
  & .react-calendar__navigation__next2-button {
    display: none;
  }

  & .react-calendar__navigation {
    margin-bottom: 21px;
    color: #212C92;
  }

  & .react-calendar__navigation__label > span {
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    font-family: 'Inter';
    font-style: normal;
    color: #212C92;
    margin: 0px 198px;
  }

  & .react-calendar__navigation__label__divider {
    display: none;
  }
  
`;

function ReservationCalender() {
  const [selectedDateRange, setSelectedDateRange] = useState([new Date(), new Date()]);

  const handleSelectDateRange = (value) => {
    setSelectedDateRange(value);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: '2-digit' });
  };

  return (
    
    <Container>
      <SelectedDays>{formatDate(selectedDateRange[0])} - {formatDate(selectedDateRange[1])}</SelectedDays>
      <StyledCalendar
        value={selectedDateRange}
        onChange={handleSelectDateRange}
        selectRange={true}
        showNavigation={true}
        minDate={new Date()}
        calendarType="US"
        locale="ko-KR"
        showDoubleView = {true}
        showFixedNumberOfWeeks = {false}
        showNeighboringMonth = {false}
        formatDay={(_, date) => date.toLocaleString('en', { day: '2-digit' })}
      />
    </Container>
  );
}

export default ReservationCalender;
