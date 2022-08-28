import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateForm = (props) => {
  console.log(props.dateFormat.length);
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      {props.dateFormat.length > 7 ? (
        <DatePicker
          dateFormat={props.dateFormat}
          selected={props.date}
          onChange={(date) => props.setDate(date)}
          popperPlacement="bottom"
        />
      ) : (
        <DatePicker // show only year and month
          dateFormat={props.dateFormat}
          selected={props.date}
          onChange={(date) => props.setDate(date)}
          popperPlacement="bottom"
          showMonthYearPicker
        />
      )}
    </div>
  );
};
export default DateForm;
