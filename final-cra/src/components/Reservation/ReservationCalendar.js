import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import theme from 'style/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

const SelectedDays = styled.p`
  margin-top: 5.688rem;
  font-weight: 700;
  font-size: ${theme.textLg};
  line-height: 2.875rem;
  letter-spacing: -0.02em;
  color: ${theme.blue};
`;

const StyledCalendar = styled(Calendar)`
  font-size: ${theme.spacingBase};
  color: ${theme.blue};
  max-width: 67.5rem;
  width: 100%;
  border: none;
  margin-top: 4.644rem;
  position: relative;

  & .react-calendar__tile {
    margin: 0.125rem;
    max-width: 4.5rem;
    height: 5.688rem;
    border: 0.063rem solid ${theme.blue};
    border-radius: 0.625rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 2.125rem;
    color: ${theme.blue};
  }

  & .react-calendar__tile--now {
    background-color: ${theme.white};
  }

  & .react-calendar__tile:hover {
    background-color: #e5ecff;
    color: ${theme.blue};
  }

  & .react-calendar__tile:disabled {
    background-color: rgba(33, 44, 146, 0.7);
    color: ${theme.white};
    border: none;
  }

  & .react-calendar__tile--active {
    color: ${theme.white};
    background: ${theme.blue};
  }

  & .react-calendar__month-view__weekdays {
    abbr {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: ${theme.spacingBase};
      line-height: 1.188rem;
      font-family: 'Inter';
      font-style: normal;
      color: ${theme.blue};
      text-decoration: none;
    }
  }

  & .react-calendar__navigation__prev-button,
  & .react-calendar__navigation__next-button {
    color: ${theme.blue};
    font-size: 5.625rem;
    position: absolute;
  }

  & .react-calendar__navigation button:disabled {
    background-color: transparent;
  }

  & .react-calendar__navigation__prev-button {
    left: -4.844rem;
    top: 16.875rem;
  }

  & .react-calendar__navigation__next-button {
    right: -4.844rem;
    top: 16.875rem;
  }

  & .react-calendar__navigation__prev2-button,
  & .react-calendar__navigation__next2-button {
    display: none;
  }

  & .react-calendar__navigation {
    margin-bottom: 1.313rem;
    color: ${theme.blue};
  }

  & .react-calendar__navigation__label > span {
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 1.938rem;
    font-family: 'Inter';
    font-style: normal;
    color: ${theme.blue};
    margin: 0rem 12.375rem;
  }

  & .react-calendar__navigation__label__divider {
    display: none;
  }
`;

function ReservationCalendar() {
  const [selectedDateRange, setSelectedDateRange] = useState([
    new Date(),
    new Date(),
  ]);

  useEffect(() => {
    const nowTiles = document.querySelectorAll('.react-calendar__tile--now');
    if (nowTiles.length > 0) {
      nowTiles[0].focus();
    }
  }, []);

  useEffect(() => {
    const firstDay = formatDate(selectedDateRange[0]);
    const lastDay = formatDate(selectedDateRange[1]);
    localStorage.setItem('firstDay', firstDay);
    localStorage.setItem('lastDay', lastDay);
  }, [selectedDateRange]);

  const handleSelectDateRange = (value) => {
    setSelectedDateRange(value);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  };

  const handleKeyDown = (e) => {
    if (e.key.includes('Arrow')) {
      const activeElement = document.activeElement;
      const monthViewDays = activeElement.parentNode.parentNode.parentNode;
      const tiles = monthViewDays.querySelectorAll('.react-calendar__tile');
      const currentIndex = Array.prototype.indexOf.call(tiles, activeElement);

      let direction = 0;
      if (e.key === 'ArrowUp') {
        direction = -7;
      } else if (e.key === 'ArrowDown') {
        direction = 7;
      } else if (e.key === 'ArrowLeft') {
        direction = -1;
      } else if (e.key === 'ArrowRight') {
        direction = 1;
      }

      const newIndex = currentIndex + direction;
      if (tiles[newIndex]) {
        tiles[newIndex].focus();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <SelectedDays>
        {formatDate(selectedDateRange[0])} - {formatDate(selectedDateRange[1])}
      </SelectedDays>
      <StyledCalendar
        value={selectedDateRange}
        onChange={handleSelectDateRange}
        selectRange={true}
        showNavigation={true}
        minDate={new Date()}
        calendarType="US"
        locale="ko-KR"
        showDoubleView={true}
        showFixedNumberOfWeeks={false}
        showNeighboringMonth={false}
        formatDay={(_, date) => date.toLocaleString('en', { day: '2-digit' })}
      />
    </Container>
  );
}

export default ReservationCalendar;
