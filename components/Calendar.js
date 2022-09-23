import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import React from 'react';

export default function Calendar({ stateDate, onChangeDate }) {
  function excludeWeekend(date) {
    const day = date.getDay();
    return day !== 6 && day !== 0;
  }

  return (
    <StyledDatePicker
      selected={stateDate}
      onChange={(date) => onChangeDate(date)}
      dateFormat="dd / MM / yyyy"
      showWeekNumbers
      filterDate={excludeWeekend}
      calendarStartDay={1}
      withPortal
      minDate={new Date()}
    />
  );
}

const StyledDatePicker = styled(DatePicker)`
  text-align: center;
  width: 35%;
  float: right;
  font-size: 16px;
  margin-right: 1.3rem;
  margin-bottom: 1rem;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;
