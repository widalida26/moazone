import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateForm = (props) => {
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      {props.noDate ? (
        <DatePicker // show only year and month
          dateFormat="yyyy.MM"
          selected={props.date}
          onChange={(date) => props.setDate(date)}
          popperPlacement="bottom"
          showMonthYearPicker
        />
      ) : (
        <DatePicker
          dateFormat="yyyy.MM"
          selected={props.date}
          onChange={(date) => props.setDate(date)}
          popperPlacement="bottom"
        />
      )}
    </div>
  );
};
export default DateForm;